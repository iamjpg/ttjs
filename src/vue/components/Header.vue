<template>
<header>
  <div class="flex-grid">
    <div class="col">1</div>
    <div class="col"><img src="./vue/assets/platypus.png" width="120" height="120"></div>
    <div class="col">3</div>
  </div>
</header>
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

<style>
.flex-grid {
  display: flex;
}

.col {
  flex: 1;
}
</style>
