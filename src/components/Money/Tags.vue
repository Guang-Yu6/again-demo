<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{tag}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    @Prop() readonly dataSource:string[] | undefined;  // 告诉TS这是字符串数组
    selectedTags: string[] = [];  // 选中后的

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    toggle(tag:string){  // 选中
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0){
        this.selectedTags.splice(index,1);
      }else{
        this.selectedTags.push(tag);
      }
      this.$emit('update:value',this.selectedTags)
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    create(){
      const name = window.prompt('请输入标签名')
      if (name === ''){
        window.alert('标签名不能为空');
      }else if (this.dataSource) {  // 如果你填了一个name，这个name不为空
          this.$emit('update:dataSource',  // 我就把你要更新DataSource的请求
              [...this.dataSource, name]);  // 告诉给外面，外部就可以接收
      }
    }
 }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
  font-size: 14px;
  padding: 16px;
  border: 1px solid red;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  > .current{
    display: flex;
    flex-wrap:wrap ;
    > li{
      $bg:#d9d9d9;
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      &.selected{
        background: darken($bg,50%);
        color: white;
      }
    }
  }
  > .new {
    padding-top: 16px;
    button{
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>
