<template>
  <div class="container-fluid">
    <!-- CommunityPage Layout -->
    <div class="community">
      <!-- Community Page Header -->
      <!-- Gallery -->
      <Gallery></Gallery>
      <!-- Social Media Links -->
      <socials></socials>
      <hr />
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
    socials,
  },
})
export default class community extends Vue {}
</script>
