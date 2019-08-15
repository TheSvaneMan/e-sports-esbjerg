<template>
  <!-- WebSite Layout -->
  <div id="app">
    <!-- NavigationApp -->
    <NavigationApp></NavigationApp>
    <!-- Webpages View from ./views -->
    <router-view />
    <!-- Space between Router View & Footer -->

    <!-- Footer -->
    <FooterApp></FooterApp>
    <!-- End of main page  -->
  </div>
</template>¨

<script>
/* Individual Page Components */

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
/* Entire Page Styling */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
}

/* Navigate Styling */
.navigate {
  background: white;
}
.navbar-brand a {
  color: white;
}
.navigate li a {
  color: black;
}

/* - - - - - - - */

/* Main Page Style */

.gamesview h1 {
  color: white;
}

/* Community  */

#CommunityTab {
  
  height: 200px;
  border-style: solid;
}
/* SignUpApp Styling */

.SignUp {
  color: white;
  height: 200px;
}

/* - - - - - - - */

/* FooterEndPage */

.footer {
  background-color: #131723;
}
.footer h1,
h4,
li a {
  color: white;
}

.footer li {
  list-style-type: none;
  color: white;
}

/* FooterEndPage */
#FooterEndPage {
  background-color: #2c93c6;
}
#FooterEndPage p {
  color: white;
}
/* - - - - - - - */
</style>
