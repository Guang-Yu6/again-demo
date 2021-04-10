<template>
  <Layout>
    <div class="tags">
      <router-link class="tag"
                   v-for="tag in tags" :key="tag.id"
                   :to="`/labels/edit/${tag.id}`">
        <span>{{tag.name}}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
        <Button class="createTag"
                @click="creatTag">新建标签
        </Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';


tagListModel.fetch();
@Component
export default class Labels extends  Vue {
  tags = window.tagList;

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  creatTag(){
    const name = window.prompt('请输出标签名')
    if (name){
      window.createTag(name);
    }
  }
}

</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
  .tags {
    background: lightyellow;
    font-size: 16px;
    padding-left: 16px;
    > .tag {
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e6e6e6;
      svg {
        width: 18px;
        height: 18px;
        color: #42b983;
        margin-right: 16px;
      }
    }
  }
  .createTag {
    background: bisque;
    color: saddlebrown;
    border-radius:4px;
    border:none;
    height: 40px;
    padding: 0 16px;
    &-wrapper{
      text-align: center;
      padding: 16px;
      margin-top: 44-16px;
    }
  }
</style>
