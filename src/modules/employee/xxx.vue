<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "xxx",
  data() {
    return {
      msg: "员工详情xxx内容"
    };
  },
  created: function() {
    this.$store.commit("locationInit", []);
    this.$store.commit("secondMenuInit", []);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
