<template>
  <section>
    <div class="p-10 mt-10 bg-cn-10 inline-block cursor-pointer" v-on:click="triggerGist()" v-if="!triggered"><i class="fas fa-plus"></i> &nbsp; Show Example Code</div>
    <div :id="target" class="gist"></div>
  </section>
</template>

<script>
import postscribe from 'postscribe'

export default {
  data() {
    return {
      target: this.returnTarget(),
      triggered: false
    }
  },
  mounted() {

  },
  props: [
    'username',
    'hash'
  ],
  methods: {
    returnTarget() {
      var S4 = function() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
      };
      return (S4()+S4()+"-"+S4());
    },
    triggerGist() {
      postscribe(`#${this.target}`, `<script src="https://gist.github.com/${this.username}/${this.hash}.js"><\/script>`);
      this.triggered = true;
    }
  }
}
</script>

<style lang="scss">
  .gist {
    margin: 15px 0;
  }
  .more-code {

  }
</style>
