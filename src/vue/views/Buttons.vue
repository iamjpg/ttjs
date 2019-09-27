<template>
  <section id="section-buttons">
    <h1>Buttons</h1>
    <p>
      There are two different variations of buttons: Regular and dense which refer to the overall size of the button. From there 
      you have many options to style the buttons.
    </p>

    <h2>Standard Buttons (With and Without Icons)</h2>
    <table>
      <thead>
        <tr>
          <th>Flat</th>
          <th>Default</th>
          <th>Primary</th>
          <th>Destructive</th>
        </tr>
      </thead>
      <tr>
        <td><tt-button type="flat">Flat</tt-button></td>
        <td><tt-button type="default">Default</tt-button></td>
        <td><tt-button type="primary">Primary</tt-button></td>
        <td><tt-button type="destructive">Destructive</tt-button></td>
      </tr>
      <tr>
        <td><tt-button type="flat" icon="fal fa-narwhal">Flat</tt-button></td>
        <td><tt-button type="default" icon="far fa-narwhal">Default</tt-button></td>
        <td><tt-button type="primary" icon="far fa-narwhal">Primary</tt-button></td>
        <td><tt-button type="destructive" icon="far fa-narwhal">Destructive</tt-button></td>
      </tr>
    </table>

    <Gist username="iamjpg" hash="ac68c026c6c12aa7915c0798d6d6b939" />

    <h2>Dense Buttons (With and Without Icons)</h2>
    <table>
      <thead>
        <tr>
          <th>Flat</th>
          <th>Default</th>
          <th>Primary</th>
          <th>Destructive</th>
        </tr>
      </thead>
      <tr>
        <td><tt-button type="flat,dense">Flat</tt-button></td>
        <td><tt-button type="default,dense">Default</tt-button></td>
        <td><tt-button type="primary,dense">Primary</tt-button></td>
        <td><tt-button type="destructive,dense">Destructive</tt-button></td>
      </tr>
      <tr>
        <td><tt-button type="flat,dense" icon="fal fa-narwhal">Flat</tt-button></td>
        <td><tt-button type="default,dense" icon="far fa-narwhal">Default</tt-button></td>
        <td><tt-button type="primary,dense" icon="far fa-narwhal">Primary</tt-button></td>
        <td><tt-button type="destructive,dense" icon="far fa-narwhal">Destructive</tt-button></td>
      </tr>
    </table>

    <Gist username="iamjpg" hash="5e084772f35329b46c0f11c3ea082225" />

    <h2>Variations using TailwindCSS's Functional Styling</h2>
    <p>All of these examples will be dense. Please take a look at the colors section to see the possibilities.</p>
    <table>
      <thead>
        <tr>
          <th>Black &amp; White</th>
          <th>Mulberry</th>
          <th>Riptide</th>
          <th>Flamenco</th>
        </tr>
      </thead>
      <tr>
        <td><tt-button type="dense, bg-black, text-white">Button</tt-button></td>
        <td><tt-button type="dense,bg-ca-mulberry,text-white">Button</tt-button></td>
        <td><tt-button type="dense,bg-ca-riptide,text-black">Button</tt-button></td>
        <td><tt-button type="dense,bg-ca-flamenco,text-black">Button</tt-button></td>
      </tr>
    </table>

    <Gist username="iamjpg" hash="d1b8871e4c56d5f9a01aa26c676bcf12" />

    <h2>Buttons as Anchor Tags</h2>

    <p>To output a button as a hyper link, simply pass an href attribute with the link. It also accepts a target attribute.</p>

    <tt-button type="primary,dense" icon="fab fa-google" href="https://google.com" target="_blank">Go to Google</tt-button>

    <Gist username="iamjpg" hash="66d5b99e4cb93344e3399915fb36c8a7" />

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
  #section-buttons {
    table:not(.blob-code), th:not(.blob-code), td:not(.blob-code) {
      border: 1px solid #e6e6e6;
      padding: 15px;
    }
  }
</style>