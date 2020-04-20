<template>
  <div class="banner">
    <!-- Front Page Banner -->
    <div id="PandorasBox">
      <!-- Carousel -->
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        :interval="3000"
        fade
        img-width="1024"
        img-height="200"
      >
        <b-carousel-slide
          caption
          img-src="@/assets/gallery/banner/banner_image_1.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption
          img-src="@/assets/gallery/banner/banner_image_2.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption
          img-src="@/assets/gallery/banner/banner_image_3.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <!-- Space between Banner & Home Page Content -->
    <br />
    <b-button pill variant="outline-light" to="/SignUp">JOIN THE CLUB</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export default {
  name: "banner",
  data: function() {
    return {};
  },
};
</script>

<style lang="scss"></style>
