<template>
  <div class="carousel-item active">
    <div class="carousel-container">
      <h2 class="animate__animated animate__fadeInDown"><slot name="title" /></h2>
      <p class="animate__animated animate__fadeInUp"><slot name="content" /></p>
      <a href="https://minecraft.jp/servers/mc.iceserver.jp" class="btn-get-started animate__animated animate__fadeInUp" target="_blank">Join The Server</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselItem'
};
</script>
