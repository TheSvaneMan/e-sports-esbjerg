
<template>
  <div class="HomePageContent">
    <!-- Column 1 & 2: 1 row -->
    <b-row align-v="center">
      <!-- ROW 1 -->
      <b-col align-self="center">
        <!-- Image Overlay -->
        <div>
          <b-card
            id="SignUpImageOverlay"
            overlay
            img-src="@/assets/gallery/banner/Sign_Up.jpeg"
            img-alt="Card Image"
            text-variant="white"
            title="ESBJERG E-SPORTS CLUB"
            sub-title
          >
            <!-- Sign Up Today -->
            <div>
              <b-button size="lg" variant="light">Sign Up</b-button>
            </div>
            <card-text>Easily become a member today!</card-text>
          </b-card>
        </div>
      </b-col>
    </b-row>
    <br />
    <!-- Community Section-->
    <b-row align-v="center">
      <b-col>
        <div id="CommunityTab">
          <b-img src="@/assets/gallery/community/PC_Setup1.jpg" fluid alt="Responsive image"></b-img>
          <br />
          <br />
          <br />
          <br />
          <h1>Join the Battle Today!</h1>
          <br />
          <p>Be part of the Esbjerg eSports Community today by signing up to one of our</p>
          <p>subscription based services we provide</p>
          <br />
          <h3>READ MORE ABOUT THE POSSIBILITIES</h3>
          <p>by following the link below</p>
          <b-button variant="outline-light" size="lg">
            <router-link to="/SignUp">Sign Up</router-link>
          </b-button>
        </div>
        <div class="mt-4">
          <b-card
            id="GalleryImageOverlay"
            overlay
            img-src="@/assets/gallery/banner/Community_Card_Image.jpg"
            img-alt="Community Card Image"
            variant="dark"
            title
            sub-title
          ></b-card>
        </div>
      </b-col>
    </b-row>
    <!-- Page End -->
  </div>
  <!-- Page End -->
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export default {
  name: "HomePageContent"
};
</script>

<style lang="css">
#SignUpImageOverlay {
  border-style: none;
}

#GalleryImageOverlay {
  border-style: none;
}
#SignUpToday {
  color: white;
  height: auto;
  border-style: none;
}

#CommunityTab {
  background-color: #131723;
  color: white;
  height: auto;
  border-style: none;
  padding-bottom: 50px;
}
</style> 
