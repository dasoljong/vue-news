<template>
  <div>
    <user-profile :info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <spand slot="time">{{ 'Joined ' +  userInfo.created }}</spand>
      <span slot="karma">{{ userInfo.karma }}</span>
    </user-profile>
    <!--    <p>name : {{ userInfo.id }}</p>-->
    <!--    <p v-if="userInfo.about">-->
    <!--      about : {{ userInfo.about }}-->
    <!--    </p>-->
    <!--    <p>karma : {{ userInfo.karma }}</p>-->
    <!--    <p>created : {{ userInfo.created }}</p>-->
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue";

export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.userName;
    this.$store.dispatch("FETCH_USER", userName);
  }
};
</script>

<style></style>
