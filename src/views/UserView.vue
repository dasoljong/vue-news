<template>
  <div>
    <p>Author : {{ fetchedUser.id }}</p>
    <p>Created : {{ fetchedUser.created }}</p>
    <p>Karma : {{ fetchedUser.karma }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedUser"]),
  },
  created() {
    const userId = this.$route.params.userName;
    this.$store.dispatch("FETCH_USER", userId);
  }
};
</script>

<style></style>
