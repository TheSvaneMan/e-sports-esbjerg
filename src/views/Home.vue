<template>
  <div class="container-fluid">
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
      <b-container>
        <!-- Home Page Design -->
        <!-- Main Page Design Layout -->
        <b-row>
          <!-- Row 1 -->
          <b-col sm>Block 1 of Row 1</b-col>
          <b-col sm>Block 2 of Row 1</b-col>
        </b-row>

        <b-row>
          <!-- Row 2 -->
          <b-col sm>Block 1 of Row 2</b-col>
          <b-col sm>Block 2 of Row 3</b-col>
        </b-row>
      </b-container>
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
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
export default class Home extends Vue {}
</script>
