<template>
    <div class="sideFixed">
        <div class="logo"></div>
        <el-menu
            :router=true
            :default-active="$route.matched[0].path"
            class="el-menu-vertical-demo"
            @select="selectNav"
            background-color="#505bbe"
            text-color="#fff"
            active-text-color="#fff">
            <el-menu-item index="/home" class="current">
                <i class="el-icon-location"></i>
                <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/student" class="current">
                <i class="el-icon-menu"></i>
                <span slot="title">学生</span>
            </el-menu-item>
            <el-menu-item index="/employee" class="current">
                <i class="el-icon-setting"></i>
                <span slot="title">员工</span>
            </el-menu-item>
            <el-menu-item index="/enrolStudents" class="current">
                <i class="el-icon-setting"></i>
                <span slot="title">招生</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {
      isHaveRouter: true
    };
  },
  methods: {
    selectNav(key, keyPath) {
      //   debugger;
      console.log(key, keyPath, this.$route.path);
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sideFixed {
  position: fixed;
  top: 40px;
  left: 0;
  bottom: 0;
  z-index: 5;
  height: 100%;
  width: 200px;
  background-color: #505cbe;
}
.logo {
  width: 160px;
  height: 80px;
  position: relative;
  top: 20px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(../../assets/logo.png);
}
.is-active.current {
  border-left: 2px #fff solid;
  background-color: #424eb0 !important;
}
</style>
