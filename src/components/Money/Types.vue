<template>
<div>
  <ul class="types">
    <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
    <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
  </ul>
</div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component,Prop} from 'vue-property-decorator';

  @Component // 组件,告诉Vue type自动处理成data
  export default class Types extends Vue {
    type = '-';  // 这是data 。 '-'表示支出，’+‘表示收入

    @Prop(Number) xxx: number | undefined;  // 装饰器
    // Prop 告诉Vue · xxx 不是 data 是 prop
    // Number  告诉 Vue xxx 运行时是个Number
    // xxx属性名
    // number| undefined 告诉 ts xxx 的编译时类型

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    selectType(type:string) { // type 只能是 '-' 和 '+' 中的一个
             if (type !== '-' && type !== '+') {
               throw new Error('type is unknown')
             }
            this.type = type;
           }
           mounted() {
             if (this.xxx === undefined){
               console.log('没有xxx');
             }else{
               console.log(this.xxx.toString());
             }
           }
  }


 // export  default {
 //   name: 'Types',
 //   props: ['xxx'],
 //   // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
 //   data() {
 //     return {
 //       type: '-' // '-'表示支出，'+'表示收入
 //     }
 //   },
 //   // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
 //   mounted() {
 //     console.log(this.xxx)
 //   },
 //   methods: {
 //     // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
 //     selectType(type) { // type 只能是 '-' 和 '+' 中的一个
 //       if (type !== '-' && type !== '+') {
 //         throw new Error('type is unknown')
 //       }
 //       this.type = type
 //     }
 //   }
 //
 // }

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
