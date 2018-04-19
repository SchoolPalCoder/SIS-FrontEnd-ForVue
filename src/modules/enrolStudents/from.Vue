<template>
  <div>
    {{msg}}
         <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "From",
  data() {
    return {
      msg: "表单内容"
    };
  },
  created: function() {
    this.$store.commit("locationInit", []);
    // this.$store.commit("secondMenuInit", []);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
