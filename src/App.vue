<template>
  <section>
    <h1>Here we go!</h1>
    <platypus-button></platypus-button>
  </section>
</template>

<script>
  import Button from './platypus.js';

  export default {
    data() {
      return {}
    },
    mounted() {
      Button();
    }
  }
</script>

<style>

</style>
