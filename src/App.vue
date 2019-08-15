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
/* - - - - - - - */
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
  height: auto;
}
.navbar-brand a {
  color: white;
}
.navigate li a {
  color: black;
}

/* - - - - - - - */

/* Main Page Style */

.gamesview h1,
h3,
p {
  color: white;
}

/* - - - - - - - */
/* Sign Up Page */
.SignUpApp {
  color: white;
  text-align: center;
  display: inline;
  max-width: 350px;
}

/* SignUpApp Styling */

.SignUp {
  padding-top: 40px;
  color: white;
  align-content: center;
  text-align: center;
  justify-content: center;
}

/* - - - - - - - */

/* Community Page */
.about {
  padding-top: 50px;
  height: auto;
  border-style: solid;
  text-align: center;
}
.about h1 {
  padding-bottom: 50px;
  color: white;
}
/* - - - - - - - */
/* AboutPage */

#CommunityTab {
  height: 200px;
  border-style: solid;
}
/* - - - - - - - */

/* Footer Navigation */

.footer {
  background-color: #131723;
  justify-content: center;
}
.footer h1,
h2,
h4,
li a {
  color: white;
}

.footer li {
  list-style-type: none;
  color: white;
}

.footer p {
  color: white;
}

/* FooterEndPage */
#FooterEndPage {
  background-color: #131723;
}
#Copyright {
  justify-content: center;
}
/* - - - - - - - */
</style>
