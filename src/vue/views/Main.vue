<template>
  <section id="section-main">
    <div id="tagline">
      <h1>Turntable is a component and CSS library providing framework agnostic components, written in <a href="https://lit-element.polymer-project.org/" target="_blank">lit-element</a>, to be used in all popular JavaScript Frameworks.</h1>
      <p>
        As it says above, the goal of this component library is to be framework agnostic. We chose TailwindCSS as the foundation and lit-element as the component integration. 
        We chose these frameworks to build on because functionalCSS is pretty awesome and lit-element allows flexibility in the implementation of components. These components 
        can even be used within the normal DOM.
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {}
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
  }
</style>
