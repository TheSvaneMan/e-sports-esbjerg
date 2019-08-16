
<template>
  <b-container>
    <div class="FAQapp">
      <!-- What is e-Sports  -->
      <b-row>
        <b-col>
          <h4>Frequently Asked Questions</h4>
          <hr />
          <div role="tablist">
            <div id="AskedQuestions">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button
                    block
                    href="#"
                    v-b-toggle.accordion-1
                    variant="outline-dark"
                  >What is e-SPORTS</b-button>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p>{{ eSports }}</p>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <!-- Who is e-Sports Esbjerg  -->
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button
                    block
                    href="#"
                    v-b-toggle.accordion-2
                    variant="outline-dark"
                  >Who is e-Sports Esbjerg</b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p>{{ eSports_Esbjerg }}</p>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <!-- Sign Up  -->
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block href="#" v-b-toggle.accordion-3 variant="outline-dark">Sign Up</b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p>{{ Sign_Up }}</p>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
        </b-col>
      </b-row>
      <hr />
    </div>
    <hr />
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export default {
  name: "FAQapp",
  data() {
    return {
      eSports: `
          "Esports (also known as electronic sports, e-sports, or eSports) is a form of competition using video games. Most commonly, esports takes the form of organized, multiplayer video game competitions, particularly between professional players, individually or as teams.

           "
        `,
      eSports_Esbjerg:
        "eSport Esbjerg is a public information society that aims to create a social life for young people as well as old people who have an interest in gaming. Here you can find people with the same interest in the different games and get a face on the people you play with. This creates an opportunity to be together around games, but at the same time get out and get to know new people.",
      Sign_Up:
        "By joining eSport Esbjerg, you are supporting your local eSport association. You will get admission as well as discounts at club events and then you will be able to use the membership offers from our sponsors / partners. Membership choice can be chosen and switched on the Account Page"
    };
  }
};
</script>

<style lang="">
</style>