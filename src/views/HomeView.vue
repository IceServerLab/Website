<script setup>
import Carousel from '@/components/carousel/Carousel.vue'
import CarouselItem from '@/components/carousel/CarouselItem.vue'
</script>

<template>
  <carousel>
    <carousel-item class="active">
      <template #title>Welcome to IceServer</template>
      <template #content>Java版、BE版でクロスプレイが可能なMinecraftサーバーです。是非ご参加お待ちしております！！</template>
    </carousel-item>
  </carousel>

  <main id="main">

    <section class="services">
      <div class="container">

        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up">
            <div class="icon-box icon-box-pink">
              <div class="icon"><i class="bx bxl-discord-alt"></i></div>
              <h4 class="title"><a href="#">Discord</a></h4>
              <p class="description"><a href="https://discord.gg/B4SYTyW" target="_blank">公式Discordサーバー</a>では、<br>他プレイヤーとの交流や最新情報の入手などメリットが多数！！</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="icon-box icon-box-cyan">
              <div class="icon"><i class="bx bxs-server"></i></div>
              <h4 class="title"><a href="#">Server</a></h4>
              <p class="description"><a href="https://hochsteweb.pages.dev/" target="_blank">Hochste Networks</a>という<br>ホスティングサービス様から無償で提供していただいております。</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box icon-box-green">
              <div class="icon"><i class="bx bxs-add-to-queue"></i></div>
              <h4 class="title"><a href="#">Plugin</a></h4>
              <p class="description">「こんなのあったら嬉しい！」などご要望があれば何でも<br>実現させることができます！！</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box icon-box-blue">
              <div class="icon"><i class="bx bxl-meta"></i></div>
              <h4 class="title"><a href="#">Event</a></h4>
              <p class="description">大規模イベントや定期イベントなど<br>鬼ごっこやPvPなど<br>色々なゲームで楽しめます！</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section class="why-us section-bg" data-aos="fade-up" date-aos-delay="200">
      <div class="container">

        <div class="row">
          <div class="col-lg-6 video-box">
            <img src="/img/live-thmubnail.jpg" class="img-fluid" alt="">
            <a href="https://www.youtube.com/watch?v=cFoAxMVKdYs" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          </div>

          <div class="col-lg-6 d-flex flex-column justify-content-center p-5">

            <div class="icon-box">
              <div class="icon"><i class="bx bxl-youtube"></i></div>
              <h4 class="title">サーバーの始まり</h4>
              <p class="description">全ては久しぶりにサバイバルがやりたくなってしまった<br>みにどんさんのYouTube配信から始まります...</p>
            </div>

            <div class="icon-box">
              <div class="icon"><i class="bx bx-question-mark"></i></div>
              <h4 class="title"><a href="">「みにどん」とは</a></h4>
              <p class="description">当サーバーのオーナー兼開発者の人です。<br>YouTube配信からプラグイン開発まで多種多様に活動しています！！</p>
            </div>

          </div>
        </div>

      </div>
    </section>

    <section class="minecraft" id="minecraft">
      <div class="container">

        <div class="section-title">
          <h2>サーバーについて</h2>
          <p>Java版、BE版（統合版）関係なく、1.8x〜1.19xまでどのバージョンでも参加可能です！！</p>
        </div>

        <div class="row" data-aos="fade-up">
          <div class="col-md-5">
            <a href="/img/join.png"><img src="/img/join.png" class="img-fluid" alt=""></a>
          </div>
          <div class="col-md-7 pt-4">
            <h3>サーバーに参加する</h3>
            <p>必ず<a href="/rule">「ルール」</a>を確認してからサーバーへ参加してください。</p>
            <ul>
              <li><i class="bi bi-check"></i> 右下の「サーバーを追加」をクリック</li>
              <li><i class="bi bi-check"></i> 左の様にサーバーアドレスを入力（画像をクリックで拡大）</li>
              <li><i class="bi bi-check"></i> 「完了」をクリック</li>
              <li><i class="bi bi-check"></i> 追加されたサーバーへ参加</li>
            </ul>
          </div>
        </div>

      </div>
    </section>

  </main>

  <a
    href="#"
    class="back-to-top d-flex align-items-center justify-content-center"
    :class="{ active: scrollY > 100 }"
    ><i class="bi bi-arrow-up-short"></i
  ></a>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0,
    };
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
  },
  watch: {
    $route: function (n, o) {
      if (n.hash.match(/^#/)) {
        document.getElementById(n.hash.replace(/^#/, "")).scrollIntoView();
      }
      console.log("new, old", [n.hash, o.hash]);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    if (this.$route.hash.match(/^#/)) {
      document
        .getElementById(this.$route.hash.replace(/^#/, ""))
        .scrollIntoView();
    }
  },
};
</script>