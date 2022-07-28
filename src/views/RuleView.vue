<script setup>
import Breadcrumbs from "@/components/Breadcrumbs.vue"
</script>

<template>
  <main id="main">
    <Breadcrumbs page="Rule" />

    <section class="about why-us" data-aos="fade-up" date-aos-delay="400">
      <h1 class="font-roboto" align="center">総合ルール</h1>
      <div class="container">
        <div class="row">
          <div class="d-flex flex-column justify-content-center p-5">
            <h3 class="title">注意事項【Minecraft】</h3>
            <h5 class="space">
              ・他、各ゲームのルールも厳守<br>
              ・常識、マナーを厳守<br>
              ・生放送、動画撮影等をしたい場合は<a href="#tp1">こちら</a>を参照
            </h5>
            <h2 class="title">禁止行為【全サービス】</h2>
            <h5 class="space">
              ・他人に規約について虚偽の情報を教える行為<br>
              ・生放送、動画撮影等のルールに違反する行為<br>
              ・なりすまし行為
            </h5>
            <h2 class="title">禁止行為【Minecraft】</h2>
            <h5 class="space">
              ・特定の個人または集団を誹謗中傷し、またはその名義若しくは信用を毀損する行為<br>
              ・不適切な発言、Spam等の行為（例として以下の通り）<br>
              ・不快なMinecraftのスキン、ユーザー名の使用<br>
              ・当ネットワークの運営を妨害する行為<br>
              ・PvPでの連打ツール、ClickBotの使用<br>
              ・不正、Hackクライアントの使用<br>
              ・当ネットワークが所有するマップの再現<br>
              ・権限を過度に要求する行為<br>
              ・実行結果がわからないコマンドの実行<br>
              ・サーバーに負荷を掛けることを目的とした行為<br>
              ・意志的なラグ・バグの利用<br>
              ・不当にゲームバランスを崩壊させる行為<br>
              ・荒らし行為
            </h5>
            <h2 class="title">禁止行為【Discord】</h2>
            <h5 class="space">
              ・特定の個人または集団を誹謗中傷し、またはその名義若しくは信用を毀損する行為<br>
              ・スパム等の行為<br>
              ・卑猥な発言、誹謗中傷<br>
              ・許可のないの宣伝<br>
              　（例外として宣伝チャンネルは許可）<br>
              ・各チャットルームのルールに違反する行為<br>
              ・チャットやボイスチャンネルの内容を無断に転載、公開する行為<br>
              ・オーナーが不適切だと、判断した行為
            </h5>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<style>
span.red { color: red; }
span.aqua { color: aqua; }
span.green { color: green; }

h1.font-roboto {
  font-family: "Roboto", sans-serif;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 30px;
}

h2.title {
  position: relative;
  padding-left: 30px;
  font-size:20px;
  color: #000;
}

h2.title::before,
h2.title::after {
  content: "□";
  position: absolute;
}

h2.title::before {
  left:0;
  top:-3px;
}

h2.title::after {
  left: 5px;
  top: 3px;
  color: #A1B8D1;
}


h5.space {
  font-family: "Open Sans", sans-serif;
  line-height: 30px;
  margin-bottom: 30px;
  margin-left: 30px;
}
</style>