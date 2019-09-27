<template>
  <section id="section-buttons">
    <h1>Buttons</h1>
    <p>
      There are two different variations of buttons: Regular and dense which refer to the overall size of the button. From there 
      you have many options to style the buttons.
    </p>

    <h2>Standard Buttons with and without Icons</h2>
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

    <h2>Dense Buttons</h2>
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

  </section>
</template>

<script>
  //import Button from 'turntable.bundle.js';

  export default {
    
  }
</script>

<style lang="scss">
  #section-buttons {
    table, th, td {
      border: 1px solid #e6e6e6;
      padding: 15px;
    }
  }
</style>