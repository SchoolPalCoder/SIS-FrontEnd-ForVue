<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "EmployeeList",
  data() {
    return {
      msg: "员工列表内容"
    };
  },
  created: function() {
    this.$store.commit("locationInit", []);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
