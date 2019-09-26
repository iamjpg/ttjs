<template>
  <section id="left-nav">
    <div id="logo-container">
      <img src="../assets/platypus.png" width="120" id="logo">
      <h4>Platypus Components</h4>
    </div>
    <ul>
      <li>Getting Started</li>
      <li class="title">CSS</li>
      <li>Typography</li>
      <li>Colors</li>
      <li>Grid</li>
      <li>Containers</li>
      <li>Box Shadows</li>
      <li>Badges</li>
      <li class="title">Components</li>
      <li>Buttons</li>
      <li>Form Elements</li>
      <li>Toasts</li>
      <li>Cards</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {

  }
}
</script>

<style lang="scss">
  #left-nav {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 250px;
    border-right: 3px solid #e6e6e6;
    background: #fff;
    overflow-y: auto;

    #logo-container {
      border-bottom: 1px solid #e6e6e6;
      margin: 0;

      h4 {
        margin-top: 6px;
      }

    }

    div {
      text-align: center;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li:not(.title) {
        padding: 15px 25px;
        border-bottom: 1px solid #e6e6e6;
      }

      li.title {
        font-weight: bold;
        font-style: italic;
        padding: 15px 25px 5px;
      }

    }

  }
</style>
