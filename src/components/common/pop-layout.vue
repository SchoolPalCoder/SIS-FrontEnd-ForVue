<template>
    <div class="modal topmodel">
      <div class="modalInner">
        <div class="modalDialog">
          <div class="popuptitle">标题</div>
          <div class="contentBox">
            <slot name="content"></slot>
          </div>
          <div class="btnBox">
            <slot name="operations"></slot>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "popLayout"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/common.css";
.modalDialog {
  width: 500px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 1px 0 5px rgba(0, 0, 0, 0.2);
}
.popuptitle {
  font-size: 16px;
  font-weight: 700;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  background-color: #f5f5f5;
  border-bottom: 1px #ddd solid;
  text-align: left;
  border-radius: 3px 3px 0 0;
}
.btnBox {
  padding: 20px;
  text-align: right;
  font-size: 0;
}
.contentBox {
  padding: 10px 20px 0 20px;
  font-size: 12px;
}
</style>
