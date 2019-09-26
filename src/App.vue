<template>
  <section id="section-main">
    <div class="container">
      <LeftNav />
      <div id="main-content-wrapper">
        <div id="main-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import LeftNav from './vue/components/LeftNav.vue';

  export default {
    data() {
      return {}
    },
    mounted() {

    },
    components: {
      LeftNav
    }
  }
</script>

<style lang="scss">
  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    background: #fff;
    padding: 0;
    margin: 0;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Oswald', sans-serif;
  }

  #section-main {

    .container {
      position: relative;
      margin: auto;
      min-height: 100vh;
      border-right: 1px solid #e6e6e6;
    }

  }

  #main-content-wrapper {
    margin-left: 250px;
  }
  #main-content {
    margin: auto;
    max-width: 940px;
    padding: 50px;
  }
</style>
