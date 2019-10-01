<template>
  <section id="section-containers">
    <h1>Containers</h1>
    <p>Below is the basic HTML implementation of containers in Turntable Components. Please note that the background color is to see the padding differences.</p>

    <div class="mb-16">
      <div class="tt-container-thick bg-cn-20">
        Thick Container - 32px padding
      </div>
      <Gist username="iamjpg" hash="96d27c7b9299b2311794358a882f2a29"></Gist>
    </div>
    <div class="mb-16">
      <div class="tt-container bg-cn-20">
        Default Container - 24px padding
      </div>
      <Gist username="iamjpg" hash="3bc0f8495a487c82bf1f6827985a905f"></Gist>
    </div>
    <div class="mb-16">
      <div class="tt-container-thin bg-cn-20">
        Thin Container - 16px padding
      </div>
       <Gist username="iamjpg" hash="35686ab164e6415948755a5dc6c8032a"></Gist>
    </div>
    <div class="mb-16">
      <div class="tt-container-extra-thin bg-cn-20">
        Extra Thin Container - 8px padding
      </div>
      <Gist username="iamjpg" hash="aa94547c0ba290ac99fcf224041a4316"></Gist>
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