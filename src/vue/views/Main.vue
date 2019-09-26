<template>
  <section id="section-main">
    <div id="tagline">
      <h1>Turntable is a component and CSS library providing framework agnostic components, written in <a href="https://lit-element.polymer-project.org/" target="_blank">lit-element</a>, to be used in all popular JavaScript Frameworks.</h1>
      <p>
        As it says above, the goal of this component library is to be framework agnostic. We chose <a href="https://tailwindcss.com" target="_blank">TailwindCSS</a> as the foundation and <a href="https://lit-element.polymer-project.org/" target="_blank">Lit-Element</a> as the component integration. 
        We chose these frameworks to build on because functional CSS is awesome and Lit-Element allows flexibility in the implementation of components. These components 
        can even be used within the normal DOM thanks to the WebComponents.org polyfill.
      </p>
      <div id="tt-loves-vue">
        <i class="far fa-turntable"></i> + <i class="fab fa-vuejs" style="color: green;"></i> = <i class="fas fa-heart" style="color: red;"></i>
      </div>
      <p>
        In an attempt to "eat our own dog food" the site you're currently viewing is a <a href="https://vuejs.org" target="_blank">VueJS</a> application loading Turntable components written in lit-element. 
        For more information on framework integration, feel free to jump ahead.
      </p>
    </div>
  </section>
</template>

<script>

  export default {
    data() {
      return {}
    },
    components: {
      
    }
  }
</script>

<style lang="scss">
  #section-main {
    h1 {
      text-align: center;
      font-weight: normal;
      font-size: 40px;
    }

    #tt-loves-vue {
      text-align: center;
      font-size: 52px;
    }
  }
</style>
