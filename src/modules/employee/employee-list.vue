<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
import { types } from "../../store/mutation-types";
export default {
  name: "EmployeeList",
  data() {
    return {
      msg: "员工列表内容"
    };
  },
  created: function() {
    this.$store.commit(types.LOCATION_INIT, []);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
