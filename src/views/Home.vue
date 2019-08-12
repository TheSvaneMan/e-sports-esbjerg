<template>
  <div class="container-fluid">
    <div class="home">
      <b-container>
        <!-- Home Page Design -->
        <!-- Main Page Design Layout -->
        <div>
          <b-card
            overlay
            img-src="https://picsum.photos/900/250/?image=3"
            img-alt="Card Image"
            text-variant="white"
            title="Welcome to E-Sports Esbjerg!"
            sub-title="Subtitle"
          >
            <b-card-text>Welcome to e-Sports</b-card-text>
          </b-card>
        </div>
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
    <img alt="Vue logo" src="../assets/logo.png" />
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
