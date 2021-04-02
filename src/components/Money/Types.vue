<template>
<div>
  <ul class="types">
    <li :class="value === '-' && 'selected'" @click="selectType('-')">支出</li>
    <li :class="value === '+' && 'selected'" @click="selectType('+')">收入</li>
  </ul>
</div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component,Prop} from 'vue-property-decorator';
  @Component // 组件,告诉Vue type自动处理成data

  export default class Types extends Vue {
    @Prop() readonly value!:string;  // 初始值
    // type = '-';   // 这是data 。 '-'表示支出，’+‘表示收入  ①
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    selectType(type:string) { // type 只能是 '-' 和 '+' 中的一个
             if (type !== '-' && type !== '+') {
               throw new Error('type is unknown')
             }
             this.$emit('update:value',type)
            // this.type = type;  ②
           }
           // @Watch('type')  ③
           //  onTypeChanged(value:string){
           //   this.$emit('update:value',value);
           //  }
    }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.types{
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: saddlebrown;
    }
  }
}
</style>
