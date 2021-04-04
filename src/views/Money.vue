<template>
  <Layout class-prefix="layout">
    <NumberPad :value="record.amount" @submit="saveRecord" @update:value="onUpdateAmount"/>
    <Types :value.sync="record.type"/>

    <div class="notes">
      <FormItem field-name="备注"
                placeholder="在这里输入备注"
                @update:value="onUpdateNotes"
      />
    </div>

    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component,Watch} from 'vue-property-decorator';
  import recordListModel from '@/models/recordListModel';
  import tagListModel from '@/models/tagListModel';


  // var record = {
  //   tags: ['1','2']
  //   notes:'xxxx'
  //   type:'-'
  //   amount:100
  // };


  const recordList = recordListModel.fetch();
  const tagList = tagListModel.fetch();

  type RecordItem = {   // 类型声明
    tags:string[],
    notes:string,
    type:string,
    amount:number,    // 数据类型 object | string
    createdAt?: Date  // 类 构造函数
  }

  @Component({
    components: {Tags,FormItem, Types, NumberPad}
  })
  export default class Money extends Vue{
    tags = tagList;               // ['衣','食','住','行','彩票'];
    recordList: RecordItem[] = JSON.parse(window.localStorage.getItem('recordList')||'[]')
    record:RecordItem = {
      tags:[],
      notes:'',
      type:'-',
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

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    saveRecord(){  // 深拷贝
      const record2: RecordItem = recordListModel.clone(this.record);
      record2.createdAt = new Date()
      this.recordList.push(record2);  // 更新数据
    }

    @Watch('recordList')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    onRecordListChange(){  // 保存数据
      recordListModel.save(this.recordList);
    }
  }
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 12px 0;
}
</style>
