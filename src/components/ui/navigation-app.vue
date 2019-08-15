<template>
  <!-- Navigate -->
  <div class="navigate">
    <b-navbar toggleable="lg">
      <b-navbar-brand href>
        <router-link to="/">
          <img src="@/assets/logo.png" alt />
        </router-link>|
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <router-link to="/about">About</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link to="/community">Community</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link to="/store">Store</router-link>
          </b-nav-item>
          <b-nav-item href="#" disabled>Account</b-nav-item>
        </b-navbar-nav>
        
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div right>
            <b-button pill variant="light" to>
              <router-link to="/SignUp">Sign Up</router-link>
            </b-button>
          </div>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <em>Profile</em>
            </template>
            <b-dropdown-item href="#">
              <div>
                <b-form inline>
                  <label class="sr-only" for="inline-form-input-name">Username</label>
                  <b-input
                    id="inline-form-input-name"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Username"
                  ></b-input>

                  <label class="sr-only" for="inline-form-input-password">Password</label>
                  <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input id="inline-form-input-username" placeholder="Password"></b-input>
                  </b-input-group>
                  <b-button variant="primary">Login</b-button>

                  <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>
                </b-form>
              </div>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navigate"
};
</script>