<template>
  <div>
    {{msg}}

       <el-button @click="goToList">跳转到学员列表</el-button>
  </div>
</template>

<script>
export default {
  name: "StudentEdit",
  data() {
    return {
      msg: "学生编辑内容"
    };
  },
  created: function() {
    this.$store.commit("locationInit", []);
    this.$store.commit("secondMenuInit", []);
  },
  methods: {
    goToList() {
      this.$router.push({ path: "/student/list" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
