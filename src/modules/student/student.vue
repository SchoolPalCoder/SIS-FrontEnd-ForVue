<template>
  <div>
    {{msg}}
        <keep-alive>
     <router-view></router-view>
        </keep-alive>
        

  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "学生模块公用内容"
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
