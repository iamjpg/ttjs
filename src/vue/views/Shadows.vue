<template>
  <section id="section-shadows">
    <h1>Box Shadows</h1>

    <p>There are 3 box shadow options in Vitruvius. All are simple CSS classes.</p>

    <div class="mb-16">
      <div class="tt-container-thick bg-cn-20 shadow-level-1">
        Shadow Level 1
      </div>
      <Gist username="iamjpg" hash="e0b066147f0e6fb85bb71467458861a0"></Gist>
    </div>
    <div class="mb-16">
      <div class="tt-container-thick bg-cn-20 shadow-level-2">
        Shadow Level 2
      </div>
      <Gist username="iamjpg" hash="2ef7a5a313c2d85f544f4689a323617f"></Gist>
    </div>
    <div class="mb-16">
      <div class="tt-container-thick bg-cn-20 shadow-level-3">
        Shadow Level 3
      </div>
      <Gist username="iamjpg" hash="91d29e5d296c9592018c72bb605d3158"></Gist>
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