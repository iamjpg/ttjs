<template>
<section id="section-grid">
  <h1>Grids</h1>
  <p>Below you will find examples of static and responsive grid layouts. For more information on grids you can consult the TailwindCSS documentation <a href="https://tailwindcss.com/components/grids/#app" target="_blank">here</a>.</p>
  <div>

    <h2>Static Grid</h2>

    <!-- Full width column -->
    <div class="v-flex">
      <div class="v-flex-item w-full bg-green text-center">1</div>
    </div>

    <!-- Two columns -->
    <div class="v-flex">
      <div class="v-flex-item w-1/2 bg-green text-center">1</div>
      <div class="v-flex-item w-1/2 bg-green-light text-center">2</div>
    </div>

    <!-- Three columns -->
    <div class="v-flex">
      <div class="v-flex-item w-1/3 bg-green text-center">1</div>
      <div class="v-flex-item w-1/3 bg-green-light text-center">2</div>
      <div class="v-flex-item w-1/3 bg-green text-center">3</div>
    </div>

    <!-- Four columns -->
    <div class="v-flex">
      <div class="v-flex-item w-1/4 bg-green text-center">1</div>
      <div class="v-flex-item w-1/4 bg-green-light text-center">2</div>
      <div class="v-flex-item w-1/4 bg-green text-center">3</div>
      <div class="v-flex-item w-1/4 bg-green-light text-center">4</div>
    </div>

    <!-- Five columns -->
    <div class="v-flex">
      <div class="v-flex-item w-1/5 bg-green text-center">1</div>
      <div class="v-flex-item w-1/5 bg-green-light text-center">2</div>
      <div class="v-flex-item w-1/5 bg-green text-center">3</div>
      <div class="v-flex-item w-1/5 bg-green-light text-center">4</div>
      <div class="v-flex-item w-1/5 bg-green text-center">5</div>
    </div>

    <Gist username="iamjpg" hash="5b328884d49de9c1ec0119eb6e669c8c" />

    <h2>Responsive Grid</h2>

    <!-- Six columns -->
    <div class="v-flex-wrap">
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-green text-center">1</div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-green-light text-center">2</div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-green text-center">3</div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-green-light text-center">4</div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 bg-green text-center">5</div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 bg-green-light text-center">6</div>
    </div>

    <div class="v-flex-wrap">
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-green text-center">7</div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-green-light text-center">8</div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-green text-center">9</div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-green-light text-center">10</div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 bg-green text-center">11</div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 bg-green-light text-center">12</div>
    </div>

    <Gist username="iamjpg" hash="709781a0145187e32ede146060fc502b" />

  </div>
</section>
</template>

<script>
  import Gist from '../components/Gist.vue';

  export default {
    components: {
      Gist
    }
  }
</script>

<style lang="scss">

</style>
