<template>
  <div id="app">
    <!-- NavigationApp -->
    <NavigationApp></NavigationApp>
    <!-- Vue from ./views -->
    <router-view />
    <!-- Footer -->
    <FooterApp></FooterApp>
  </div>
</template>¨

<script>
/* Individual Page Components */
/* CommunityPage */
/* News Components */
import NewsHolder from "./components/apps/CommunityPage/News/AddsHolder";
import LinksHolder from "./components/apps/CommunityPage/News/LinkHolder";
import AddsHolder from "./components/apps/CommunityPage/News/AddsHolder";

/* - - - - - - - - - - - - -  - - - - - - - - -  - - - - -  - - - - - - - -  - - */

/* UI Apps */
/* Header Navigation */
import NavigationApp from "./components/ui/navigation-app";
/* Footer */
import FooterApp from "./components/ui/footer-app";
/* - - - - - - - - - - - - -  - - - - - - - - -  - - - - -  - - - - - - - -  - - */

export default {
  name: "app",
  components: { NavigationApp, FooterApp },

  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
/* FooterEndPage */
li {
  list-style-type: none;
}

/* FooterEndPage */
#FooterEndPage {
  color: #2c3e50;
}
</style>
