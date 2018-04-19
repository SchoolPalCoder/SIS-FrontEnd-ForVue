<template>
  <div>
    <advancedSearch @search="onSearch" :data="searchData"></advancedSearch>
    <popLayout v-if="isShowPop">
      <div slot="content">
       <el-input v-model="searchData.key" placeholder="请输入内容"></el-input>
      </div>
      <div slot="operations">
        <el-button @click="cancel">确定</el-button>
        <el-button @click="cancel">取消</el-button>
      </div>
    </popLayout>
    <el-button @click="goToEdit">跳转到学员编辑</el-button>
    <el-button @click="goToEmployeeDetail(1)">跳转到员工详情</el-button>
    <el-button @click="goToHome">跳转到首页</el-button>
    <el-button @click="isShowPop = !isShowPop">显示弹框</el-button>
    <el-tabs type="border-card" @tab-click="chooseTab">
      <el-tab-pane label="我的学生">
          <el-table
            v-loadmore="loadMore"
            :data="studentList"
            border
            height="500"
            style="width: 100%">
            <el-table-column
              prop="title"
              label="标题"
              >
            </el-table-column>
            <el-table-column
              prop="create_at"
              label="时间"
              >
            </el-table-column>
          </el-table>
      </el-tab-pane>
      <el-tab-pane label="全部学生">全部学生</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import advancedSearch from "../../components/common/advancedSearch";
import popLayout from "../../components/common/pop-layout";
import Net from "../../services/net/student-net";
export default {
  name: "StudentList",
  components: { advancedSearch, popLayout },
  data() {
    return {
      searchData: {
        key: "",
        type: "1",
        time: ""
      },
      studentList: [],
      isShowPop: false
    };
  },
  created: function() {
    this.$store.commit("locationInit", [{ name: "我的学生" }]);
    this.$store.commit("secondMenuInit", []);
    console.log("1");
    // if (this.$store.state.advaned.searchData == "") {
    //   this.$store.commit("setAdvancedData", this.searchData);
    // } else {
    //   this.searchData = this.$store.state.advaned.searchData;
    // }
  },
  activated: function() {
    console.log("如果要重新获取列表在这里加请求");
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    cancel() {
      this.isShowPop = false;
    },
    onSearch(data) {
      console.log(data);
      // this.$store.commit("setAdvancedData", this.searchData);
      console.log(this.searchData);
      console.log(this.$store.state.advaned.searchData);
    },
    getData() {
      Net.getList()
        .then(data => {
          this.studentList = data;
          console.log(this.studentList.length);
        })
        .catch(err => {
          console.log(err);
        });
    },
    loadMore() {
      console.log("滚动到底了");
      Net.getList()
        .then(data => {
          this.studentList = this.studentList.concat(data);
          console.log(this.studentList.length);
        })
        .catch(err => {
          console.log(err);
        });
    },
    chooseTab(tab, event) {
      if (tab.index === "0") {
        this.$store.commit("locationInit", [{ name: "我的学生" }]);
        this.getData();
      } else {
        this.$store.commit("locationInit", [{ name: "全部学生" }]);
        Net.getErrorList()
          .then(data => {
            this.studentList = data;
            console.log(data);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    goToEdit() {
      this.$router.push({ path: "/student/edit" });
    },
    goToEmployeeDetail(id) {
      this.$router.push({ path: `/employee/detail/${id}` });
    },
    goToHome() {
      this.$router.push({ path: "/home" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
