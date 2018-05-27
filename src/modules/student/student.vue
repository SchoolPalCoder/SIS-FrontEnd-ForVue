<template>
  <div>
    {{msg}}
        <keep-alive>
     <router-view></router-view>
        </keep-alive>


  </div>
</template>

<script>
import { types } from "../../store/mutation-types";
export default {
  name: "Student",
  data() {
    return {
      msg: "学生模块公用内容"
    };
  },
  created: function() {
    this.$store.commit(types.LOCATION_INIT, []);
    this.$store.commit("secondMenuInit", []);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
