<template>
  <section id="section-main">
    <div id="tagline">
      <h1>Turntable is a component and CSS library providing framework agnostic components, written in <a href="https://lit-element.polymer-project.org/" target="_blank">lit-element</a>, to be used in all popular JavaScript Frameworks.</h1>
      <p>
        As it says above, the goal of this component library is to be framework agnostic. We chose TailwindCSS as the foundation and Lit-Element as the component integration. 
        We chose these frameworks to build on because functional CSS is awesome and lit-element allows flexibility in the implementation of components. These components 
        can even be used within the normal DOM thanks to the WebComponents.org polyfill.
      </p>
      <p>
        <img src="../assets/vue-logo.png" width="200" id="vue-logo">
      </p>
      <p>
        In an attempt to "eat our own dog food" the site you're currently viewing is a VueJS application loading Turntable components written in lit-element. 
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

    #vue-logo {
      margin: auto;
    }
  }
</style>
