<template>
<div>
  <label class="notes">
    <span class="name">{{this.fieldName}}</span>
    <input type="text"
           v-model="value"
           :placeholder="this.placeholder">
  </label>
</div>
<!--  :value="value"-->
<!--  @input="onInput = $event.target.value"-->
<!--  简写为v-model = '值'-->
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Watch,Prop} from 'vue-property-decorator';

@Component
  export default class Notes extends Vue {
    value = '';

    @Prop({required:true}) fieldName!:string;
    @Prop() placeholder?: string

    @Watch('value')
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
.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding:8px;
  display: flex;
  align-items: center;
  .name{
    padding-right:16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border:none;
    padding-right: 16px;
  }
}
</style>
