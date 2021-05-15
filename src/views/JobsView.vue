<template>
  <div>
    <div v-for="job in fetchedJobs" v-bind:key="job">
      {{ job.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      // jobs: [],
    };
  },
  computed:{
    ...mapGetters(["fetchedJobs"])
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  }
};
</script>
