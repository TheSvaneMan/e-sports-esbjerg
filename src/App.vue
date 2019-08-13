<template>
  <div id="app">
    <!-- Navigate -->
    <div class="navigate">
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#">
          <router-link to="/">Home</router-link>|
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">
              <router-link to="/about">About</router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/gallery">Gallery</router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/community">Community</router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/store">Store</router-link>
            </b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <div right>
              <b-button pill variant="outline-primary" to>Sign Up</b-button>
            </div>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <!-- Vue from ./views -->
    <router-view />

    <!-- Footer Bar -->
    <div id="Footer">
      <b-container>
        <!-- Footer Design -->
        <!-- Main Page Design Layout -->
        <b-row>
          <!-- Row 1 -->
          <b-col align-self="start" sm>
            <!-- Left Column "Footer" -->
            <h1>Info</h1>
            <ul>
              <li>admin@esport-esbjerg.dk</li>
              <li>Cheese</li>
              <li>+45 3113 1774</li>

              <li></li>
            </ul>
          </b-col>
          <b-col align-self="end" sm>
            <h1>Socials</h1>
            <ul>
              <li>
                <a href="https://www.facebook.com">facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com">instagram</a>
              </li>
              <li>
                <a href="https://www.discord.com">discord</a>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
      <!-- Footer Copyright Section -->
      <div id="FooterEndPage">
        <p>2019 - eSports Esbjerg</p>
      </div>
    </div>
  </div>
</template>

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
