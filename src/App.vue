<template>
  <div id="app">
    <ToolBar></ToolBar>
    <RouterView></RouterView>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";

export default {
  components: {
    ToolBar
  }
};
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}
</style>
