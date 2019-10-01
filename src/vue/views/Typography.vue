<template>
  <section id="section-typography">
    <h1 class="tt">Typography</h1>

    <p>Turntable Components uses the standard base font size of 16px which allows us to calculate font size in REM values from that point. If you're curious about conversions, you can look at this experiment here: <a href="https://daniellamb.com/experiments/px-to-rem-calc/" target="_blank">https://daniellamb.com/experiments/px-to-rem-calc/</a></p>
    <p>We're opting for REM values as accessibility is a goal of this project. If our user has changed their base font setting then our font sizes should adjust accordingly.</p>

    <h2 class="tt">Headline Examples</h2>

    
    <h1>Hello, You</h1>

    <h2>Hello, You</h2>

    <h3>Hello, You</h3>

    <h4>Hello, You</h4>

    <h5>Hello, You</h5>
    

    <Gist username="iamjpg" hash="363ab0478ece0ef3143a6d66a8ff3e03"></Gist>

    <h2 class="tt">Class Examples</h2>

    
    <p class="text-xs">This is an example of our extra small font size of 12px or .75rem.</p>

    <p class="text-sm">This is an example of our small font size of 14px or .875rem.</p>

    <p class="text-lg">This is an example of our large font size of 18px or 1.125rem.</p>

    <p class="text-xl">This is an example of our XL font size of 20px or 1.25rem.</p>

    <p class="text-2xl">This is an example of our 2xl font size of 20px or 1.5rem.</p>

    <p class="text-3xl">This is an example of our 2xl font size of 30px or 1.875rem.</p>

    <p class="text-4xl">This is an example of our 4xl font size of 36px or 2.25rem.</p>

    <p class="text-5xl">This is an example of our 5xl font size of 40px or 2.5rem.</p>

    <Gist username="iamjpg" hash="16b6a328977de086ba6bdec3225e1f7d"></Gist>
    
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
  #section-typography {
    h1:not(.tt), h2:not(.tt), h3:not(.tt), h4:not(.tt), h5:not(.tt) {
      font-family: 'Muli', Verdana, Helvetica, sans-serif;
    }
  }
</style>