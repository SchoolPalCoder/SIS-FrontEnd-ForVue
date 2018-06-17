<template>
  <div>
    {{msg}}
     <router-view></router-view>
         <el-button @click="goToEdit(2)">跳转到学员编辑</el-button>
  </div>
</template>

<script>
import xxx from "./xxx";
import { types } from "../../store/mutation-types";
export default {
  name: "EmployeeDetail",
  components: { xxx },
  data() {
    return {
      msg: "员工详情内容"
    };
  },
  created: function() {
    this.$store.commit(types.LOCATION_INIT, []);
    this.$store.commit("secondMenuInit", []);
  },
  methods: {
    goToEdit(id) {
      this.$router.push({ path: `/employee/detail/${id}/xxx` });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
