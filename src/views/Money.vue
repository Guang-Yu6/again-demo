<template>
  <Layout class-prefix="layout">
    {{record}}
    <NumberPad :value="record.amount" @update:value="onUpdateAmount"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';

  // var record = {
  //   tags: ['1','2']
  //   notes:'xxxx'
  //   type:'-'
  //   amount:100
  // };

  type Record = {   // 类型声明
    tags:string[],
    notes:string,
    type:string,
    amount:number
  }

  @Component({
    components: {Tags, Notes, Types, NumberPad}
  })
  export default class Money extends Vue{
    tags = ['衣','食','住','行','彩票'];
    record:Record = {
      tags:[],
      notes:'',
      // type:'-',
      amount:0
    };


    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    onUpdateTags(value:string[]) {  // 回调，当你更新那个的时候就会调用这个方法
      this.record.tags = value
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    onUpdateNotes(value:string){
      this.record.notes = value
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    onUpdateType(value:string){
      this.record.type = value
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    onUpdateAmount(value:string){
      this.record.amount = parseFloat(value);
    }

  }
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
