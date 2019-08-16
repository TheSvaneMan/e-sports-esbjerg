<template>
  <!-- WebSite Layout -->
  <div id="app">
    <!-- NavigationApp -->
    <NavigationApp></NavigationApp>
    <!-- Webpages View from ./views -->
    <router-view />
    <!-- Footer -->
    <FooterApp></FooterApp>
  </div>
</template>¨

<script>
import NavigationApp from "./components/ui/navigation-app";
import FooterApp from "./components/ui/footer-app";

export default {
  name: "app",
  components: { NavigationApp, FooterApp },

  methods: {}
};
</script>

<style>
/* - - - - - - - */
/* Entire App.vue Styling */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #131723;
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
/* Sign Up Page /views*/
.SignUpApp {
  color: white;
  text-align: center;
}

/* SignUpApp Styling  */

.SignUp {
  padding-top: 40px;
  color: white;
  width: 480px;
}

#SignUpAppContainer {
  display: inline;
}


/* - - - - - - - */

/* Community Page /views */
.about {
  padding-top: 50px;
  height: auto;
  border-style: solid;
  text-align: center;
  height: auto;
}


.about h1 {
  padding-bottom: 50px;
  color: white;
}
#CommunityTab {
  height: 200px;
  border-style: solid;
}
/* - - - - - - - */
/* AboutPage /views */
.FAQapp {
  width: auto;
}

.FAQapp p {
  color: black;
}

.FAQapp {
  color: black;
}

#TheTeam h4 {
  color: white;
}
.OurTeamApp {
  border-style: none;
}

.about {
  border-style: none;
  justify-content: center;
  justify-self: center;
}
/* - - - - - - - */
/* Store Page /views*/
.store {
  color: white;
}
/* - - - - - - - */
/* Footer Navigation App */

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

#FooterCol {
  justify-content: center;
  align-content: center;
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
