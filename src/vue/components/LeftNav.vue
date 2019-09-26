<template>
  <section id="left-nav">
    <div id="logo-container">
      <i class="far fa-turntable"></i>
      <h3>Turntable Components</h3>
    </div>
    <ul>
      <li class="title">Getting Started</li>
      <router-link to="/">
        <li>About</li>
      </router-link>
      <router-link to="/installation">
        <li>Installation</li>
      </router-link>
      <router-link to="/framework-integration">
        <li>Framework Integration</li>
      </router-link>
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
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 250px;
    border-left: 1px solid #e6e6e6;
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
      margin: 12px 0 0 0;
      padding: 0;

      li:not(.title) {
        padding: 8px 25px;
        margin-left: 10px;
        // border-bottom: 1px solid #e6e6e6;
      }

      li.title {
        font-weight: bold;
        font-style: italic;
        padding: 15px 25px 5px;
      }

      li:not(.title):hover {
        cursor: pointer;
      }

    }

  }
</style>
