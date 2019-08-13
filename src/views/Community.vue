<template>
  <div class="community">
    
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
  </div>
</template>

<script lang="ts">
import gallery from "@components/gallery-app.vue";
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }, 
})
export default class Home extends Vue {}
</script>