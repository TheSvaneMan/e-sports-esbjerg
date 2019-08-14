<template>
  <div class="gamesview">
    <!-- Game Rotation -->
    <br />
    <div>
      <!-- Carousel -->
      <h1>GAMES WE PLAY</h1>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        :interval="3000"
        fade
        img-width="1024"
        img-height="200"
      >
        <b-carousel-slide caption img-src="@/assets/gallery/games/CSGO_Wallpaper.jpg">
          <button>STORE</button>
        </b-carousel-slide>
        <b-carousel-slide caption img-src="@/assets/gallery/games/Fortnite_Wallpaper.jpg">
          <button>STORE</button>
        </b-carousel-slide>
        <b-carousel-slide caption img-src="@/assets/gallery/games/Overwatch_Wallpaper.jpg">
          <button>STORE</button>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <!-- Space between Banner & Home Page Content -->
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export default {
  name: "gamesview",
  data: function() {
    return {};
  }
};
</script>

<style lang="scss"></style> 