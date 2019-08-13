<template>
  <div id="app">
    <!-- NavigationApp -->
    <NavigationApp></NavigationApp>

    <!-- Vue from ./views -->
    <router-view />

    <!-- NEWS -->
    <div id="app" class="container">
      <h1 class="text-center mb-5">My component based structure</h1>
      <div class="row">
        <div class="col-md-9 col-12">
          <news-holder v-on:read="newsRead" date="yesterday"></news-holder>
        </div>
        <div class="col-md-2 d-sm-none d-md-block">
          <links-holder></links-holder>

          <adds-holder></adds-holder>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <FooterApp></FooterApp>
    </div>
</template>¨

<script>
/* News Components */
import NewsHolder from "./components/NewsHolder";
import LinksHolder from "./components/LinkHolder";
import AddsHolder from "./components/AddsHolder";

/* UI-based-Apps */
import NavigationApp from "./components/ui/navigation-app"
import FooterApp from "./components/ui/footer-app"

export default {
  name: "app",
  components: { AddsHolder, LinksHolder, NewsHolder, NavigationApp, FooterApp },

  methods: {
    newsRead(num) {
      alert("You read news! Number is: " + num);
    }
  }
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
