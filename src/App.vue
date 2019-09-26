<template>
  <section>
    <LeftNav />
    <div id="main-content">
      <router-view></router-view>
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

<style>
  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
    background: #fff;
    padding: 0;
    margin: 0;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Bitter', serif;
  }
  #main-content {
    margin-left: 250px;
    padding: 50px;
  }
</style>
