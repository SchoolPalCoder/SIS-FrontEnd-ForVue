<template>
  <div>
    {{msg}}

       <el-button @click="goToList">跳转到学员列表</el-button>
       <el-button @click="save">保存并显示loading</el-button>
  </div>
</template>

<script>
import { types } from "../../store/mutation-types";
export default {
  name: "StudentEdit",
  data() {
    return {
      msg: "学生编辑内容"
    };
  },
  created: function() {
    this.$store.commit(types.LOCATION_INIT, []);
    this.$store.commit("secondMenuInit", []);
  },
  methods: {
    goToList() {
      this.$router.push({ path: "/student/list" });
    },
    save() {
      const loading = this.$loading({
        lock: true,
        text: "加载中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
