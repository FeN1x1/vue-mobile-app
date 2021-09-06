<template>
  <div id="app" class="max-w-sm m-auto">
    <router-view />
    <navbar :routes="navbarRoutes.routes" />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import routes from "@/data/routes.json";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      navbarRoutes: routes,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400&display=swap");

#app {
  font-family: "Noto Sans TC", sans-serif;
 
}
</style>
