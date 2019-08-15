<template>
  <!-- Links to Social Media -->

    <b-container class="socials">
      <!-- GALLERY HEADER -->
      <h1>FIND US ON SOCIAL MEDIA</h1>
      <hr />
      <b-row align-v="start" sm>
        <b-col>
          <a href>
            <img src="@/assets/img/Facebook.png" alt />
          </a>
        </b-col>
        <b-col>
          <a href>
            <img src="@/assets/img/Discord.png" alt />
          </a>
        </b-col>
        <b-col>
          <a href>
            <img src="@/assets/img/Twitch.png" alt />
          </a>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
export default {
  name: "socials",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.socials {
  color: white;
}
.socials li {
  list-style-type: none;
}
</style>