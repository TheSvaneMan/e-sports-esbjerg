<template>
  <div id="app">
    <!-- NavigationApp -->
    <NavigationApp></NavigationApp>
    <!-- Vue from ./views -->
    <router-view />
    <!-- Space between Router View & Footer -->
    <br />
    <!-- Footer -->
    <FooterApp></FooterApp>
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
  background-color: whitesmoke;
}
/* Navigate Styling */
.navigate {
  background: rgb(74, 74, 80);
}
.navbar-brand a {
color: white;
}
.navigate li a {
  color: whitesmoke;
}



/* FooterEndPage */

.footer {
  background-color: rgb(74, 74, 80);
}
.footer h1, h4, li a {
  color: white;
}

.footer li {
  list-style-type: none;
  color: white;
}


/* FooterEndPage */
#FooterEndPage{
  background-color: black;
}
#FooterEndPage p {
  color: white;
}
</style>
