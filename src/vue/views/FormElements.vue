<template>
  <section id="section-form-elements">
    <h1>Form Elements</h1>

    <h2 ref="inputs">Text Inputs and Textarea</h2>

    <div class="short">
      <tt-input type="text" label="Plain Input Text Field" name="foo" id="bar"></tt-input>
    </div>
    <br />
    <div class="short">
      <tt-input type="tel" label="Icon Left With label" name="foo" iconleft="fas fa-bell-exclamation"></tt-input>
    </div>
    <br />
    <div class="short">
      <tt-input type="tel" label="Input with clear button" name="foo" closeIcon="fal fa-times-circle" pattern="[0-9]*" value="test"></tt-input>
    </div>
    <br />
    <div class="short">
      <tt-input type="tel" format="true" label="Phone Number Formatting" name="foo" value="5555555555"></tt-input>
    </div>
    <br />
    <div class="short">
      <tt-input type="textarea" label="Text Area Example" name="foo" id="plop" rows="20"></tt-input>
    </div>

    <h2>Checkbox Elements</h2>

    <div>
      <tt-checkbox label="Basic Checkbox" name="check-box-name" value="foo" checked="true"></tt-checkbox>
    </div>
    <div>
      <tt-checkbox label="Destrictive Checkbox" type="destructive" value="bar" name="check-box-name"></tt-checkbox>
    </div>
    <div>
      <tt-checkbox label="Disabled Checkbox" type="disabled" value="baz" name="check-box-name"></tt-checkbox>
    </div>

    <h2>Radio Elements</h2>

    <div>
      <tt-radio label="Basic Radio" name="radio1" value="foo"></tt-radio>
    </div>
    <div>
      <tt-radio label="Destructive Radio" type="destructive" name="radio1" value="bar" checked="true"></tt-radio>
    </div>
    <div>
      <tt-radio label="Disabled Radio" type="disabled" name="radio1" value="baz"></tt-radio>
    </div>

    <h2>Switch Elements</h2>

    <div class="tt-flex">
      <div class="tt-flex-item w-1/5">Basic</div>
      <div class="tt-flex-item w-1/5"><tt-switch name="doctor" value="dre" checked="true"></tt-switch></div>
    </div>
    <div class="tt-flex">
      <div class="tt-flex-item w-1/5">Rounded</div>
      <div class="tt-flex-item w-1/5"><tt-switch name="tribe" value="called quest" type="round"></tt-switch></div>
    </div>
    <div class="tt-flex">
      <div class="tt-flex-item w-1/5">Destructive</div>
      <div class="tt-flex-item w-1/5"><tt-switch name="snoop" value="dogg" type="destructive"></tt-switch></div>
    </div>

  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
