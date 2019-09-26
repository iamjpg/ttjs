<template>
  <section id="left-nav">
    <div id="logo-container">
      <i class="far fa-turntable"></i>
      <h3>Turntable Components</h3>
    </div>
    <ul>
      <li class="title">Getting Started</li>
      <li>About</li>
      <li>Installation</li>
      <li>Framework Integration</li>
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
    font-size: 14px;
    line-height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 250px;
    border-right: 1px solid #e6e6e6;
    background: #fff;
    overflow-y: auto;

    #logo-container {
      border-bottom: 1px solid #e6e6e6;
      margin: 0;

      i {
        font-size: 75px;
        margin: 25px;
      }

      h3 {
        margin: 0 0 25px;
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

      li:not(.title):hover {
        background: #f5f5f5;
        cursor: pointer;
      }

    }

  }
</style>
