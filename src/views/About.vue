<template>
  <div class="container-fluid">
    <div class="about">
      <h1>ABOUT ESBJERG ESPORTS GAMING</h1>
      <!-- Our Team App -->
      <OurTeamApp></OurTeamApp>
      <hr />
      <!-- FAQ App -->
      <FAQapp></FAQapp>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import FAQapp from "@/components/apps/AboutPage/faq-app.vue";
import OurTeamApp from "@/components/apps/AboutPage/our-team-app.vue";

@Component({
  components: {
    FAQapp,
    OurTeamApp,
  },
})
export default class about extends Vue {}
</script>
