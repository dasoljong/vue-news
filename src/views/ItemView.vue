<template>
  <div>
    <h1>{{fetchedItem.title}}</h1>
    <small>
      <router-link v-bind:to="`/user/${fetchedItem.user}`">{{fetchedItem.user}}</router-link>
      by {{fetchedItem.time_ago}}</small>
    <div v-html="fetchedItem.content"></div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  computed:{
    ...mapGetters(["fetchedItem"])
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", id);
  },
};
</script>

<style></style>
