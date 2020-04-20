<template>
  <b-container>
    <div class="OurTeamApp">
      <!-- Our Team  -->
      <b-row>
        <b-col id="TheTeam">
          <!-- Our Team  -->
          <h4>The Team</h4>
          <hr />
          <div>
            <b-card
              overlay
              img-src="@/assets/gallery/community/esports_esbjerg_team.jpg"
              img-alt="Card Image"
              text-variant="white"
              title
              sub-title
            ></b-card>
          </div>
          <hr />
          <h4>
            We want to help with all eSport activities in Southwest, whether it
            be small LAN parties, major tournaments, fixed training,
            registration, etc. We are also creating teams that will compete on a
            professional level! Events like these raise awareness and popularity
            not only within the city but make Denmark known for it worldwide. We
            organize gatherings to game with friends, compete against each
            other, also workshops and informative meetings with professional
            eSports gamers!
          </h4>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export default {
  name: "OurTeamApp",
  data: function() {
    return {};
  },
};
</script>

<style lang=""></style>
