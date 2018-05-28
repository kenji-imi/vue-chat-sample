<template>
  <div id="app">
      <div class="sidebar">
          <listSearch></listSearch>
          <list></list>
      </div>
      <div class="main">
          <message></message>
          <messageText></messageText>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import ListSearch from './components/ListSearch';
import List from './components/List';
import Message from './components/Message';
import MessageText from './components/Text';

export default {
    components: { 
        ListSearch,
        List,
        Message,
        MessageText
    },
    methods: 
        mapActions([
            'initData'
        ]),
    created () { // インスタンスが作成された後に同期的に呼ばれる
        this.initData();
    }
}
</script>

<!-- スタイル -->
<style lang="less" scoped>

#app {
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    position: fixed;
    top: 0px;
    left: 0px;

    .sidebar {
        float: left;        
        width: 200px;
        height: 100vh;
        color: #f7f7f7;
        background-color: #2d2240;
    }
    .main {
        height: 100vh;
        position: relative;
        overflow: hidden;
        background-color: #eee;
    }
    .message {
        height: ~'calc(100vh - 160px)';
    }
    .message-text {
        position: absolute;
        width: 100vw;
        height: 160px;
        bottom: 0;
        left: 0;
    }
}
</style>