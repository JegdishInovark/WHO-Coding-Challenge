<template>
  <div>
    <b-container class="home_container">
      <b-row class="title_txt">
        <b-col>
          <h2>WHO Course App</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12" md="4"></b-col>
        <b-col sm="12" md="4">
          <SearchBox @search="handleSearch" />
        </b-col>
        <b-col sm="12" md="4"> </b-col>
      </b-row>
      <CourseCard />
      <!-- <CourseCard
          v-for="card in filteredCards"
          :key="card.id"
          :cardData="card"
      /> -->
    </b-container>
  </div>
</template>

<script>
import CourseCard from "../components/CourseCard.vue";
import SearchBox from "../components/SearchBox.vue";
export default {
  name: "home_page",
  props: {},
  components: { CourseCard, SearchBox },
  computed: {
    filteredCards() {
      if (!this.searchTerm) {
        return this.cards;
      }
      const term = this.searchTerm.toLowerCase();
      return this.cards.filter((card) =>
        card.title.toLowerCase().includes(term)
      );
    },
  },
  methods: {
    handleSearch(searchTerm) {
      this.searchTerm = searchTerm;
    },
  },
  data() {
    return {
      cards: [
        {
          id: "course-v1:F2F05+F2F05+F2F05_01",
          title: "To check complete F2F functionality on July 05 2022",
          image_url:
            "https://lxp-nginx-lms-labs-staging.apps.dev.lxp.academy.who.int/asset-v1:F2F05+F2F05+F2F05_01+type@asset+block@f2f.jpg",
          org: "F2F05",
          pacing: "instructor",
          language: "en",
        },
        {
          id: "course-v1:Jan+25+0540",
          title: "SEQL25Jan054054",
          image_url:
            "https://lxp-nginx-lms-labs-staging.apps.dev.lxp.academy.who.int/asset-v1:F2F05+F2F05+F2F05_01+type@asset+block@f2f.jpg",
          org: "Jan",
          pacing: "self",
          language: "en",
        },
        {
          id: "course-v1:Jan+25+1017",
          title: "PROB25Jan101742",
          image_url:
            "https://lxp-nginx-lms-labs-staging.apps.dev.lxp.academy.who.int/asset-v1:F2F05+F2F05+F2F05_01+type@asset+block@f2f.jpg",
          org: "Jan",
          pacing: "self",
          language: "en",
        },
        {
          id: "course-v1:Jan+25+1027",
          title: "DISC25Jan102752",
          image_url:
            "https://lxp-nginx-lms-labs-staging.apps.dev.lxp.academy.who.int/asset-v1:F2F05+F2F05+F2F05_01+type@asset+block@f2f.jpg",
          org: "Jan",
          pacing: "self",
          language: "en",
        },
      ],
      searchTerm: "",
    };
  },
};
</script>

<style>
.home_container {
  background-color: white;
  height: 100vh;
}
.title_txt {
  padding: 30px 10px 0px 10px;
  text-align: center;
}
</style>
