<template>
  <div class="container-fluid">
    <!-- Home Page Layout -->
    <div class="home">
      <!-- Hello, introduction box -->
      <hello></hello>
      <!-- Banner -->
      <banner></banner>
      <!-- GAMES -->
      <GamesView></GamesView>
      <!-- HomePageContent -->
      <HomePageContent></HomePageContent>
      <!-- - - - -->
   
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import banner from "@/components/apps/HomePage/banner-app.vue";
import HomePageContent from "@/components/apps/HomePage/home-page-content-app.vue";
import hello from "@/components/HelloWorld.vue";
import GamesView from "@/components/apps/HomePage/games-view-app.vue";

@Component({
  components: {
    hello,
    banner,
    HomePageContent,
    GamesView
  }
})
export default class Home extends Vue {}
</script>
