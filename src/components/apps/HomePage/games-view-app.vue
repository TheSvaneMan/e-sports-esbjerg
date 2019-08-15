<template>
  <div class="gamesview">
    <!-- Game Rotation -->
    <br />
    <div>
      <!-- Carousel -->
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        :interval="2000"
        fade
        img-width="1024"
        img-height="200"
      >
        <h1>ADVANCE YOUR GAMING SKILLS TO PRO LEVEL</h1>
        <br>
        <br>
        <p>eSport Esbjerg is a public education association that gathers gaming interested people - young and old.</p>
        <!-- Spacing 3br-->
        <br />
        <br />
        <br />
        <!-- Spacing -->
        <b-carousel-slide caption img-src="@/assets/gallery/games/CSGO_Wallpaper.jpg"></b-carousel-slide>
        <b-carousel-slide caption img-src="@/assets/gallery/games/Fortnite_Wallpaper.jpg"></b-carousel-slide>
        <b-carousel-slide caption img-src="@/assets/gallery/games/Overwatch_Wallpaper.jpg"></b-carousel-slide>
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