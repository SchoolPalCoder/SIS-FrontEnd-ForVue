<template>
<div>
      <el-button @click="goto">跳转到学员</el-button>
      <h1>{{ msg }}</h1>
</div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "首页模块内容"
    };
  },
  created: function() {
    this.$store.commit("locationInit", []);
    this.$store.commit("secondMenuInit", []);
  },
  methods: {
    goto() {
      this.$router.push({ path: "/student" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
