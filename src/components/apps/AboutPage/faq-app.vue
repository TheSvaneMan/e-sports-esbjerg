
<template>
    <div class="FAQapp">
      <!-- Our Team  -->
      
      <!-- FAQ  -->
      <!-- Header  -->
      <h4>Frequently Asked Questions</h4>
      <!-- Drop Down List  -->

      <!-- What is e-Sports  -->
      <div role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-1 variant="info">What is e-SPORTS</b-button>
          </b-card-header>
          <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ what_is_eSports }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <!-- Who is e-Sports Esbjerg  -->
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-2 variant="info">Who is e-Sports Esbjerg</b-button>
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ Who_is_eSports_Esbjerg }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <!-- Sign Up  -->
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-3 variant="info">Sign Up</b-button>
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ Sign_Up }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export default {
  name: "FAQapp",
  data: function() {
    return {
      what_is_eSports: `
          eSport is electronic sport, ie. computer games on the competition plan, which involves firm training both physically and in the game, participation in tournaments and championships, qualifications and finals. eSport is for everyone, regardless of age, language and wherever you are.
        `,
      Who_is_eSports_Esbjerg:
        "eSport Esbjerg is a public education association whose purpose is to create a gathering for young people, as well as old people who have an interest in gaming. Here you can find people with the same interest within the different games and get the face of the people you play with. This creates an opportunity to be around games, but at the same time get to know new people.",
      Sign_Up:
        "Get access and discounts at club events. Access to both Discord and Teamspeak server. Benefits of eSport Esbjergs game server. Member offers from sponsors. Membership within eSport Esbjerg ensures that eSport development in the Esbjerg area does not stop."
    };
  }
};
</script>