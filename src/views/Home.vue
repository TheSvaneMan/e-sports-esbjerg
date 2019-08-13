<template>
  <div class="container-fluid">
    <div class="home">
      <b-container>
        <!-- Home Page Design -->
        <!-- Main Page Design Layout -->
        <!-- Overlay Card Home Page -->
        <b-card
          overlay
          img-src="<projectRoot>/assets/Earth_Is_Our_Home_CloseUp_Edited.jpg"
          img-alt="Card Image"
          text-variant="white"
          title="Welcome to E-Sports Esbjerg!"
        >
          <!-- Overlay Title -->
          <b-card-text>Welcome to e-Sports</b-card-text>
        </b-card>

        <b-row>
          <!-- Row 1 -->
          <b-col sm>
            <!-- Content Container 1 -->
            <div>
              <!-- About Box -->
              <div class="mt-4">
                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="About">
                        <b-card-text>This box shall have a link to About</b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </div>
            </div>
          </b-col>
          <b-col sm>
            <!-- Content Container 2 -->
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="Gallery">
                    <b-card-text>
                      This is a wider card with supporting text as a natural
                      lead-in to additional content. This content is a little
                      bit longer.
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>

        <b-row>
          <!-- Row 2 -->
          <b-col sm>
            <!-- Content Container 3 -->
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="Community">
                    <b-card-text>This is going to be a box for Community.</b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
          <b-col sm>
            <!-- Content Container 4 -->
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="Store">
                    <b-card-text>This is going to be a box for store.</b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
