<template>
    <div class="addressFixed" v-if="$store.state.secondMenu.list.length != 0">
        <div class="clearFix container">
            <div class="fl iconBox">
                <span>{{$route.path}}</span>
            </div>
            <div class="fl box">
              <el-menu :router=true :default-active="$route.path" class="el-menu-demo box" mode="horizontal" @select="handleSelect">
                <el-menu-item v-for="item in $store.state.secondMenu.list" :key="item.index" :index="item.path" class="box">{{item.name}}{{item.path}}</el-menu-item>
              </el-menu>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "secondMenu",
  data() {
    return {
      activeIndex: "0"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/common.css";
.container {
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.iconBox {
  height: 45px;
  line-height: 44px;
  font-size: 14px;
  color: #333;
  cursor: default;
  padding-left: 35px;
  padding-right: 20px;
  border-right: 1px solid #ddd;
}
.box {
  height: 45px;
  line-height: 45px;
}
.noticeItem {
  display: inline-block;
  height: 45px;
  line-height: 44px;
  cursor: pointer;
  margin: 0 20px;
  border-bottom: 4px transparent solid;
  font-size: 14px;
  color: #333;
}
.noticeItemCurrent {
  display: inline-block;
  height: 45px;
  line-height: 44px;
  cursor: pointer;
  border-bottom: 4px transparent solid;
  font-size: 14px;
  color: #4868cd;
  border-color: #4868cd;
}
</style>
