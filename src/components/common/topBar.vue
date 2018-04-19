<template>
    <div class="navBarFixed">
    <span class="logoText">万科</span>
    </div>
</template>

<script>
export default {
  name: 'topBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navBarFixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    padding-left: 20px;
    background-color: #2d2d2d;
}
.logoText {
  display: inline-block;
    line-height: 40px;
    font-size: 16px;
    color: #fff;
}
</style>
