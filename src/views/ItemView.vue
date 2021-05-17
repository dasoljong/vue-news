<template>
  <div>
    <p>user : {{fetchedItem.user}}</p>
    <p>time ago : {{fetchedItem.time_ago}}</p>
    <h1>{{fetchedItem.title}}</h1>
    <div v-html="fetchedItem.content"></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed:{
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  }
}
</script>