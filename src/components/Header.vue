<template>
  <header id="header" class="fixed-top d-flex align-items-center" :class="{ 'header-scrolled': scrollY > 100, 'header-transparent': currentRouteName == 'Home'}">
    <div class="container d-flex justify-content-between align-items-center">

      <div class="logo">
        <h1 class="text-light"><router-link to="/"><span>Ice Server</span></router-link></h1>
      </div>

      <nav id="navbar" class="navbar" :class="{ 'navbar-mobile' : navOpen }">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/rule">Rule</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li class="dropdown"><a href="#"><span>Links</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="https://discord.gg/B4SYTyW" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a href="https://twitter.com/IceServerMC" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://github.com/IceServerLab" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>Others</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <!--<li><router-link to="/">aaa</router-link></li>-->
            </ul>
          </li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
        <i class="bi mobile-nav-toggle" :class="{
          'bi-list': !navOpen,
          'bi-x': navOpen
        }" @click="toggleNav()"></i>
      </nav>

    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    }
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  }
}
</script>
