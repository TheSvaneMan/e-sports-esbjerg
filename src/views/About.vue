<template>
  <div class="container-fluid">
    <div class="about">
      <!-- AboutPage Design -->
      <!-- AboutPage Layout -->
      <!-- Heading -->
      <h1>This is an about page</h1>
      <p></p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class about extends Vue {}
</script>
