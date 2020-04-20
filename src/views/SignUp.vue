<template>
  <b-container>
    <!-- Store Page Layout -->
    <div class="SignUp">
      <hr />
      <h1>TEAM UP TODAY</h1>
      <p>Fill out the Application to join the club 2019</p>

      <!-- Sign Up App -->
      <SignUpApp></SignUpApp>
    </div>
  </b-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SignUpApp from "@/components/apps/SignUpPage/sign-up-app.vue";

@Component({
  components: {
    SignUpApp,
  },
})
export default class SignUp extends Vue {}
</script>
<style lang=""></style>
