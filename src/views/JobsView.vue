<template>
  <div>
    <div v-for="job in jobs" v-bind:key="job">
      {{ job.title }}
    </div>
  </div>
</template>

<script>
import { fetchJobsList } from "../api/index.js";

export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    fetchJobsList()
      .then(response => {
        console.log(response);
        console.log(this);
        this.jobs = response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
