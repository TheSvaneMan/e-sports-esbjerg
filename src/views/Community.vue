<template>
  <div class="container-fluid">
    <div class="community">
      <!-- Community Page Header -->
      <h1>Community Page</h1>

      <!-- CommunityPage Layout -->
      <!-- Gallery -->
      <Gallery></Gallery>
      <!-- -->
      <socials></socials>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Gallery from "@/components/apps/CommunityPage/Gallery/gallery-app.vue";
import socials from "@/components/apps/CommunityPage/Gallery/socials-app.vue";

@Component({
  components: {
    Gallery,
    socials
  }
})
export default class community extends Vue {}
</script>