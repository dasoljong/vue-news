<template>
  <div>
    <p v-for="item in this.$store.state.news" v-bind:key="item">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>
        {{ item.time_ago }} by
        <router-link v-bind:to="`/user/${item.user}`">
          {{ item.user }}
        </router-link>
      </small>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // users: []
    };
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  }
};
</script>
