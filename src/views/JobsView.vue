<template>
  <div>
    <p v-for="job in fetchedJobs" v-bind:key="job">
      <a v-bind:href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }} <a v-bind:href="job.url">{{ job.domain }}</a></small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      // jobs: [],
    };
  },
  computed: {
    ...mapGetters(["fetchedJobs"])
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  }
};
</script>
