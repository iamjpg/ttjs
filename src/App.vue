<template>
  <section>
    <LeftNav />
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
    background: #fff;
    padding: 0;
    margin: 0;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Bitter', serif;
  }
</style>
