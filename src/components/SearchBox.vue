<template>
  <div>
    <b-input-group size="sm" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input
        type="search"
        v-model="search"
        placeholder="Search Courses..."
      ></b-form-input>
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: "search_sbox",
  components: {},
  methods: {
    search() {
      this.$emit("search", this.searchTerm);
    },
  },
  props: {},
  data() {
    return {
      searchTerm: "",
    };
  },
};
</script>

<style></style>
