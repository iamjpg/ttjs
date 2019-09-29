<template>
  <section id="section-form-elements">
    <h1>Form Elements</h1>

    <h2 ref="inputs">Text Inputs and Textarea</h2>

    <div class="short">
      <tt-input type="text" label="Plain Input Text Field" name="foo" id="bar"></tt-input>
    </div>
    <br />
    <div class="short">
      <tt-input type="tel" label="Icon Left With label" name="foo" iconleft="fas fa-bomb"></tt-input>
    </div>
    <br />
    <div class="short">
      <tt-input type="tel" label="Input with clear button" name="foo" iconclose="true" pattern="[0-9]*" value="test"></tt-input>
    </div>
    <br />
    <div class="short">
      <tt-input type="tel" format="true" label="Phone Number Formatting" name="foo" value="5555555555"></tt-input>
    </div>
    <br />
    <div class="short">
      <tt-input type="textarea" label="Text Area Example" name="foo" id="plop" rows="20"></tt-input>
    </div>

  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#section-form-elements {}
</style>
