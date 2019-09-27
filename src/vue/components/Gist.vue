<template>
  <div :id="target" class="gist"></div>
</template>

<script>
import postscribe from 'postscribe'

export default {
  data() {
    return {
      target: this.returnTarget()
    }
  },
  mounted() {
    postscribe(`#${this.target}`, `<script src="https://gist.github.com/${this.username}/${this.hash}.js"><\/script>`)
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
    }
  }
}
</script>

<style lang="scss">
  .gist {
    margin: 15px 0;
  }
</style>