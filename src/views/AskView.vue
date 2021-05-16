<template>
  <div>
    <p v-for="item in ask">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }}{{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      // ask: []
    };
  },
  computed: {
    ...mapState({
      ask: state => state.ask
    })

    // ask(){
    //   return this.$store.state.ask
    // }
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
    //   fetchAskList()
    //     .then(response => {
    //       this.ask = response.data;
    //     })
    //     .catch(err => console.log(err));
  }
};
</script>
