<template>
  <div id="gist"></div>
</template>

<script>
import postscribe from 'postscribe'

export default {
  mounted() {
    postscribe('#gist', `<script src="https://gist.github.com/${this.username}/${this.hash}.js"><\/script>`)
  },
  props: [
    'username',
    'hash'
  ]
}
</script>

<style lang="sass">

</style>