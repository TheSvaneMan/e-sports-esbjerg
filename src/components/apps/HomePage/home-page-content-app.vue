
<template>
  <div class="HomePageContent">
    <!-- Column 1 & 2: 1 row -->
    <b-row align-v="center">
      <!-- ROW 1 -->
      <b-col align-self="center">
        <!-- Image Overlay -->
        <div>
          <b-card
            overlay
            img-src="@/assets/gallery/banner/Sign_Up.jpeg"
            img-alt="Card Image"
            text-variant="white"
            title="JOIN THE E-SPORTS ESBJERG CLUB TODAY"
            sub-title
          >

            <!-- Sign Up Today -->
            <div>
              <b-button size="lg" variant="light">Sign Up</b-button>
            </div>
            <h3>Hello</h3>
          </b-card>
        </div>
      </b-col>
    </b-row>
    <!-- Row 2 -->
    <b-row align-v="center">
      <!-- Community -->
      <b-col>
        <div class="mt-4">
          <b-card
            overlay
            img-src="@/assets/gallery/banner/Community_Card_Image.jpg"
            img-alt="Community Card Image"
            text-variant="white"
            title="OUR COMMUNITY"
            sub-title
          >
  
            <!-- Sign Up Today -->
            <div>
              <b-button size="lg" variant="light">Sign Up</b-button>
            </div>
          </b-card>
        </div>
      </b-col>
    </b-row>
    <!-- Row 3 -->
    <b-row align-v="center">
      <b-col>
        <!-- Store -->
        <h4>STORE</h4>
        <b-card
          img-src="https://placekitten.com/300/300"
          img-alt="Card image"
          img-left
          class="mb-3"
        >
          <b-card-text>Games and Services availabel for Purchase</b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <!-- Row 4 -->
    <b-row align-v="center">
      <!-- Sign Up -->
      <b-col>
        <div class="mt-4">
          <h4>SIGN UP</h4>
          <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
            <b-card-text>Sign up today and Join the great community!</b-card-text>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export default {
  name: "HomePageContent",
  data: function() {
    return {};
  }
};
</script>

<style lang="scss"></style> 
