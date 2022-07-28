<template>
  <section id="hero" class="d-flex justify-cntent-center align-items-center">
    <div id="heroCarousel" class="container carousel carousel-fade" data-bs-interval="50" data-bs-ride="carousel" ref="carousel">
      <slot name="default" />

      <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
      </a>

      <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
      </a>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue';
import Bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

export default {
  name: 'Carousel',
  setup (props, { slots }) {
    const carouselCount = ref(0);
    const carousel = ref(null);
    const childs = slots.default();

    for (const child of childs) typeof child.type === 'object' && child.type.name === 'CarouselItem' && carouselCount.value++;

    onMounted(() => {
      new Bootstrap.Carousel(carousel.value); // eslint-disable-line no-new
    });

    return {
      carouselCount,
      carousel
    };
  }
};
</script>
