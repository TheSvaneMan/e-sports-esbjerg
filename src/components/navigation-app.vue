<template>
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
</template>

<script lang="ts">

export default {}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
