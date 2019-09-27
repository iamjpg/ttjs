<template>
  <div :id="target" class="gist"></div>
</template>

<script>
import postscribe from 'postscribe'

export default {
  mounted() {
    postscribe(`#${this.target}`, `<script src="https://gist.github.com/${this.username}/${this.hash}.js"><\/script>`)
  },
  props: [
    'username',
    'hash',
    'target'
  ]
}
</script>

<style lang="scss">
  .gist {
    margin: 15px 0;
  }
</style>