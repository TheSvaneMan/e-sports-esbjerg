
<template>
  <div class="HomePageContent">
    <!-- Column 1 & 2: 1 row -->
    <b-row>
      <!-- ROW 1 -->
      <b-col>
        <div class="mt-4">
          <h4>Left and Right (or Start and End)</h4>
          <b-card
            img-src="/static/logo.png"
            img-alt="Card image"
            img-left
            class="mb-3"
          >
            <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <b-col>
          <div class="mt-4">
            <h4>Left and Right (or Start and End)</h4>
            <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
              <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
            </b-card>
          </div>
        </b-col>
      </b-col>
    </b-row>
    <!--  -->
    <!-- Column 2: 1 row -->
    <b-row>
      <!-- ROW 1 -->
      <b-col>Column 1 row 2</b-col>
      <b-col>Column 2 row 2</b-col>
    </b-row>
    <!--  -->
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