<template>
  <div class="container-fluid">
    <!-- Store Page Layout -->
    <div class="SignUp">
      <!-- StorePage Design -->
      <!-- StorePage Design Layout -->
      <h1>Will be updated shortly</h1>
      <!-- SignUp FORM Start  -->
      <SignUpApp></SignUpApp>
      <!-- SignUp FORM End  -->
      <!-- SignUp Page End  -->
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SignUpApp from "@/components/apps/SignUpPage/sign-up-app.vue";

@Component({
  components: {
    SignUpApp
  }
})
export default class SignUp extends Vue {}
</script>
<style lang="">
</style>
