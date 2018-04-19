<template>
    <div class="addressFixed">
        <span class="route">当前位置：</span>
        <el-breadcrumb class="route" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item  v-for="(item) in $router.currentRoute.matched" :key="item.index" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
        <el-breadcrumb-item  v-for="(item) in $store.state.location.list" :key="item.index" :to="{ path: '/' }">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
  name: "location"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/common.css";
.route {
  float: left;
  line-height: 45px;
  font-size: 14px;
  color: #333;
}
.router {
  cursor: pointer;
  line-height: 45px;
  font-size: 14px;
  color: #333;
}
</style>
