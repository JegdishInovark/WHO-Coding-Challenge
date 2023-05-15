<template>
  <div>
    <b-container>
      <b-row class="card_row">
        <b-col
          sm="12"
          md="3"
          class="card_col"
          v-for="data in cardData"
          :key="data.id"
        >
          <b-card
            :img-src="data.image_url"
            @error="
              $event.target.src =
                'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/99-worlds-fastest-production-cars-lead.jpg?itok=M8r05vlz'
            "
            img-alt="No img"
            img-top
            tag="article"
            class="mb-2 card_content"
          >
            <b-card-text>
              <b-row class="card_description">
                <b-col>
                  <div class="card_title_txt">{{ data.id }}</div>
                  <div class="card_body_txt">
                    {{ data.title }}
                  </div>
                </b-col>
              </b-row>

              <div class="card_footer">
                <span class="card_icon_txt"
                  ><b-icon icon="play-btn-fill" aria-hidden="true"></b-icon
                ></span>
                <span class="card_pacing_txt"> {{ data.pacing }}</span>
                <span class="card_translate_icon">
                  <b-icon icon="translate" aria-hidden="true"></b-icon>
                  <span class="card_translate_txt">
                    {{ data.language }}</span
                  ></span
                >
              </div>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "course_card",
  components: {},
  methods: {
    getCourseInfo(pageSize, pageNumber, lang, fromLocal) {
      if (fromLocal) {
        this.cardData = [
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
        ];
      } else {
        axios
          .get(
            `/api/v3/search_courses_paginated/?page=${pageNumber}&page_size=${pageSize}&language=${lang}`
          )
          .then((response) => {
            this.cardData = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
  mounted() {
    this.getCourseInfo(10, 1, "en", true);
    // axios
    //   .get("/api/v3/search_courses_paginated/?page=1&page_size=20&language=en")
    //   .then((response) => {
    //     this.cardData = response.data;
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  },
  props: {},
  data() {
    return {
      useAlternativeImage: true,
      cardData: {},
      imageUrl: require("../assets/img/card_image.png"),
    };
  },
};
</script>

<style>
.course-card {
  margin-top: 1rem;
}
.home_container {
  background-color: white;
  height: 100vh;
}
.title_txt {
  padding: 30px 10px 0px 10px;
  text-align: center;
}
.card_row {
  padding: 10px 10px 10px 10px;
}
.card_col {
  margin-top: 1rem !important;
}
.card_title_txt {
  color: #acacac;
  font-weight: 500;
}
.card_body_txt {
  font-size: 18px;
  font-weight: 500;
}
.card_icon_txt {
  color: #57be57;
  font-weight: 500;
  margin-top: 0.75rem;
}
.card_pacing_txt {
  margin-left: 0.5rem;
  font-weight: 500;
  color: #57be57;
  font-size: 18px;
  text-transform: capitalize;
}
.card_description {
  height: 80px;
}
.card_footer {
  margin-top: 0.75rem;
}
.card_translate_txt {
  color: #4c4c4c;
  font-weight: 500;
  font-size: 18px;
  margin-left: 0.5rem;
  text-transform: uppercase;
}
.card_translate_icon {
  float: right;
  color: #565a5e;
}
.card_content {
  border: none !important;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px !important;
  border-radius: 20px !important;
}
.card-img-top {
  border-top-right-radius: 20px !important;
  border-top-left-radius: 20px !important;
  height: 180px !important;
}
.card-body {
  height: 150px;
}
</style>
