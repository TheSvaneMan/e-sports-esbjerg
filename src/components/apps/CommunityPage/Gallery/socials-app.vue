<template>
  <!-- Links to Social Media -->

  <b-container class="socials">
    <!-- GALLERY HEADER -->
    <h1>FIND US HERE</h1>
    <hr />
    <b-row align-v="start" sm>
      <b-col>
        <a href="https://www.facebook.com/eSportEsbjerg/">
          <img src="@/assets/img/Facebook.png" alt />
        </a>
      </b-col>
      <b-col>
        <a
          href="https://discordapp.com/invite/tW6mMUm?fbclid=IwAR24FfWV-JgBr-NmwwUTPAqGvYAQNunf49UnffWVZfRtwlSZmepXymvNVy0"
        >
          <img src="@/assets/img/Discord.png" alt />
        </a>
      </b-col>
      <b-col>
        <a href="https://www.twitch.tv/esportesbjerglive">
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
  methods: {},
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
