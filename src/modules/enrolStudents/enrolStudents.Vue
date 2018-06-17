<template>
  <div>
    {{msg}}
         <router-view></router-view>
  </div>
</template>

<script>
import { types } from "../../store/mutation-types";
export default {
  name: "EnrolStudents",
  data() {
    return {
      msg: "招生模块内容"
    };
  },
  created: function() {
    this.$store.commit(types.LOCATION_INIT, []);
    this.$store.commit("secondMenuInit", [
      { name: "线索", path: "/clue" },
      { name: "表单", path: "/from" }
    ]);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
