<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
import { types } from "../../store/mutation-types";
export default {
  name: "xxx",
  data() {
    return {
      msg: "员工详情xxx内容"
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
