<template>
  <section id="left-nav">
    <div id="sticky-container">
      <div id="logo-container" class="center">
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
        <router-link to="/typography">
          <li>Typography</li>
        </router-link>
        <router-link to="/colors">
          <li>Colors</li>
        </router-link>
        <router-link to="/grid">
          <li>Grid</li>
        </router-link>
        <router-link to="/containers">
          <li>Containers</li>
        </router-link>
        <router-link to="/box-shadows">
          <li>Box Shadows</li>
        </router-link>
        <li>Badges</li>
        <li class="title">Components</li>
        <router-link to="/buttons">
          <li>Buttons</li>
        </router-link>
        <router-link to="/form-elements">
          <li>Form Elements</li>
        </router-link>
        <li>Toasts</li>
        <li>Cards</li>
      </ul>
    </div>
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

    #sticky-container {
      position: fixed;
      width: 250px;
    }

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

    .center {
      text-align: center;
    }

    ul {
      list-style: none;
      margin: 12px 0 0 0;
      padding: 0;

      li:not(.title) {
        padding: 12px 25px;
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
