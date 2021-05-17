<template>
  <div>
    <p v-for="item in ask" v-bind:key="item">
      <router-link v-bind:to="`item/${item.id}`">{{ item.title }}</router-link>
      <small>{{ item.time_ago }}
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link></small>
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
