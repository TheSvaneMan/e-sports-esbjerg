<template>
  <div class="gallery">
    <!-- Image Carousel (Can be updated by copying <b-carousel-slide> and inserting image dir) -->
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slide 1 -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/gallery/1.jpg"
          alt="image slot"
        />
      </b-carousel-slide>

      <!-- Slide 2 -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/gallery/2.jpg"
          alt="image slot"
        />
      </b-carousel-slide>
      <!-- Slide 3 -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/gallery/3.jpg"
          alt="image slot"
        />
      </b-carousel-slide>
      <!-- Slide 4 -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/gallery/4.jpg"
          alt="image slot"
        />
      </b-carousel-slide>
      <!-- Slide 5 -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/gallery/5.jpg"
          alt="image slot"
        />
      </b-carousel-slide>
      <!-- Slide 6 -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/gallery/6.jpg"
          alt="image slot"
        />
      </b-carousel-slide>
      <!-- Slide 7 -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/gallery/7.jpg"
          alt="image slot"
        />
      </b-carousel-slide>
      <!-- Slide 8 -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/gallery/8.jpg"
          alt="image slot"
        />
      </b-carousel-slide>
      <!-- Slide 9 -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/gallery/9.jpg"
          alt="image slot"
        />
      </b-carousel-slide>
      <!-- Slide 10 -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/gallery/10.jpg"
          alt="image slot"
        />
      </b-carousel-slide>
      <!-- Slide 11 -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="@/assets/gallery/11.jpg"
          alt="image slot"
        />
      </b-carousel-slide>
    </b-carousel>

    <p class="mt-4">
      Image {{ slide }}
    </p>
  </div>

  <!-- Social Media -->
</template>

<script>

export default {
  name: "gallery",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>