<template>
<div>
  <label class="formItem">
    <span class="name">{{this.fieldName}}</span>
    <input type="text"
           v-model="value"
           :placeholder="placeholder">
  </label>
</div>
<!--  :value="value"-->
<!--  @input="onInput = $event.target.value"-->
<!--  简写为v-model = '值'-->
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';

@Component
  export default class FormItem extends Vue {
    @Prop({default:''}) value!:string;

    @Prop({required:true}) fieldName!:string;
    @Prop() placeholder?: string


    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onValueChanged(value:string){
      this.$emit('update:value',value)
    }
  //   onInput(event:KeyboardEvent){
  //    const input = event.target as HTMLInputElement
  //     this.value = input.value;
  //   }
  }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.formItem {
  font-size: 14px;
  padding:8px;
  display: flex;
  align-items: center;
  .name{
    padding-right:16px;
  }
  input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border:none;
    padding-right: 16px;
  }
}
</style>
