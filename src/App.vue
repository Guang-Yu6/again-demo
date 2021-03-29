<template>
  <div id="app">
    <router-view/>
    <hr>

  </div>

</template>

<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";
// 全局
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    font-family: $font-hei;
    font-size: 16px;
    line-height: 1.5;
  }
.clearfix::after {   // 清楚浮动
  content:'';
  display: block;
  clear: both;
}
</style>
