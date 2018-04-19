<template>
  <div id="app" v-loading.fullscreen.lock="$store.state.loading.isLoading">
    <!-- 头部 -->
    <topBar></topBar>
    <!-- 左侧导航栏 -->
    <navBar></navBar>
    <!-- 面包屑 -->
    <location v-if="$route.path.split('/').length > 2"></location>
    <!-- 二级导航栏 -->
    <secondMenu v-show="$route.path.split('/').length ===2"></secondMenu>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import topBar from "./components/common/topBar";
import navBar from "./components/common/navBar";
import location from "./components/common/location";
import secondMenu from "./components/common/secondMenu";

export default {
  name: "App",
  components: { topBar, navBar, location, secondMenu },
  data: function() {
    return {};
  },
  created: function() {
    // this.$router.beforeEach((to, from, next) => {
    //   if (from.fullPath.indexOf("edit") > -1) {
    //     this.$confirm("当前操作将离开该页面，确定离开吗？", "提示", {
    //       confirmButtonText: "确定离开",
    //       cancelButtonText: "继续编辑",
    //       type: "warning"
    //     })
    //       .then(() => {
    //         next();
    //       })
    //       .catch(() => {
    //         next(false);
    //       });
    //   } else {
    //     next();
    //   }
    // });
  },
  methods: {}
};
</script>

<style>
.main {
  padding: 106px 20px 0 220px;
}
</style>
