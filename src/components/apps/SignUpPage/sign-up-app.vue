<template>
  <div class="container-fluid">
    <div class="SignUpApp">
      <!-- PERSONAL DATA-->
      <!-- FIRST NAME -->
      <div>
        <h5>First Name</h5>
        <b-form-input v-model="text" placeholder="Enter your First Name"></b-form-input>
        <div class="mt-2">{{ firstname }}</div>
        <br />
      </div>
      <!-- Last Name -->
      <div>
        <h5>Last Name</h5>
        <b-form-input v-model="text" placeholder="Enter your Last Name"></b-form-input>
        <div class="mt-2">{{ lastname }}</div>
      </div>
      <hr />
      <!-- Last Name -->
      <div>
        <h5>e-mail</h5>
        <b-form-input v-model="text" placeholder="Enter your E-Mail example HagridOwns@gmail.com"></b-form-input>
        <div class="mt-2">{{ email }}</div>
        <br />
      </div>
      <!-- Address  -->
      <div>
        <h5>Address</h5>
        <b-form-input v-model="text" placeholder="Enter your Street Address"></b-form-input>
        <div class="mt-2">{{ street }}</div>
        <br />
      </div>
      <!-- Post Number -->
      <div>
        <h5>Post Number</h5>
        <b-form-input v-model="text" placeholder="P.O.Box"></b-form-input>
        <div class="mt-2">{{ postnumber }}</div>
        <br />
      </div>
      <!-- City -->
      <div>
        <h5>City</h5>
        <b-form-input v-model="text" placeholder="Enter your city"></b-form-input>
        <div class="mt-2">{{ city }}</div>
        <br />
      </div>
      <!-- Birthday -->
      <div>
        <h5>Birthday</h5>
        <b-input :id="`type-${type}`" :type="type" placeholder="Enter your birthday"></b-input>
        <div class="mt-2">{{ birthday }}</div>
        <br />
      </div>

      <hr />
      <!-- ACCOUNT DATA-->
      <!-- USER NAME-->
      <div>
        <h5>User Name</h5>
        <b-form-input v-model="text" placeholder="Enter your UserName"></b-form-input>
        <div class="mt-2">{{ username }}</div>
        <br />
      </div>
      <!-- Password -->
      <div>
        <h5>Password</h5>
        <b-form-input v-model="text" placeholder="Enter your desired password"></b-form-input>
        <div class="mt-2">{{ password }}</div>
        <br />
      </div>

      <!-- E-Mail Notifications -->
      <div>
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >I accept the terms and use</b-form-checkbox>
        <br />
      </div>
      <!-- Sign Up -->
      <div class="text-center">
        <b-button pill variant="primary" id="popover-button-variant" size="lg">Sign Up</b-button>
        <b-popover target="popover-button-variant" variant="success" triggers="focus">
          <template slot="title">Congratulations</template>
          You have successfully sent the application
        </b-popover>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export default {
  name: "SignUpApp",
  data() {
    return {
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      email: "",
      address: "",
      postnumber: "",
      city: "",
      types: ["date"]
    };
  }
};
</script>

<style lang="">

</style>