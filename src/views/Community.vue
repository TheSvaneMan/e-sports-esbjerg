<template>
  <div class="container-fluid">
    <div class="community">
      <!-- CommunityPage Design -->
      <!-- CommunityPage Layout -->
      <!-- Overlay Card Home Page -->
      <h1>Community i say hey</h1>
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <h1>This is the community page Block 1</h1>
          </b-col>
          <b-col>
            <h1>This is the community page Block 2</h1>
          </b-col>
          <b-col>
            <h1>This is the community page Block 3</h1>
          </b-col>
        </b-row>
      </b-container>
      <!-- NEWS -->
      <div id="app" class="container">
        <h1 class="text-center mb-5">My component based structure</h1>
        <div class="row">
          <div class="col-md-9 col-12">
            <news-holder v-on:read="newsRead" date="yesterday"></news-holder>
          </div>
          <div class="col-md-2 d-sm-none d-md-block">
            <links-holder></links-holder>
            <adds-holder></adds-holder>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddsHolder from "@/components/apps/CommunityPage/News/AddsHolder.vue"; // @ is an alias to /src

@Component({
  components: {
    AddsHolder
  }
})
export default class community extends Vue {}
</script>