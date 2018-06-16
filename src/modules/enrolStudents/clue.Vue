<template>
  <div>
    {{msg}}
         <router-view></router-view>
  </div>
</template>

<script>
import { types } from "../../store/mutation-types";
export default {
  name: "Clue",
  data() {
    return {
      msg: "线索内容"
    };
  },
  created: function() {
    this.$store.commit(types.LOCATION_INIT, []);
    // this.$store.commit("secondMenuInit", []);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
