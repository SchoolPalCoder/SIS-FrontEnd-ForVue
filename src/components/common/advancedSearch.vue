<template>
    <div class="box1">
      <ul class="ulEditBox">
        <li>
          <span class="lableTips">关键字</span>
          <span class="liInput">
            <el-input v-model="data.key" placeholder="请输入内容"></el-input>
          </span>
        </li>
         <li>
          <span class="lableTips">类型</span>
          <span class="liInput">
            <el-select v-model="data.type" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </span>
         </li>
        <li>
          <span class="lableTips">时间</span>
          <span class="liInput">
            <el-date-picker
              v-model="data.time"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </span>
         </li>
      </ul>
      <el-button @click="search">搜索</el-button>
    </div>
</template>

<script>
export default {
  name: "advancedSearch",
  props: {
    data: Object
  },
  data() {
    return {
      options: [
        {
          value: "1",
          label: "全部"
        },
        {
          value: "2",
          label: "双皮奶"
        },
        {
          value: "3",
          label: "蚵仔煎"
        },
        {
          value: "4",
          label: "龙须面"
        },
        {
          value: "5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  methods: {
    search() {
      this.$emit("search", "111111");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/common.css";
.box1 {
  margin-top: 10px;
  padding: 20px;
  background-color: #fff;
}
.ulEditBox {
  margin-right: -20px;
  font-size: 0;
}
.ulEditBox > li {
  display: inline-block;
  vertical-align: top;
  padding-right: 20px;
  padding-bottom: 15px;
}
.lableTips {
  width: 94px;
  display: table-cell;
  padding-right: 10px;
  text-align: right;
  font-size: 14px;
  color: #333;
  vertical-align: middle;
  line-height: 1;
}
.liInput {
  display: table-cell;
  vertical-align: middle;
}
</style>
