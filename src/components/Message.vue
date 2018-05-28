<template>
    <div class="message" v-chat-scroll>
        <div v-if="activeRoom">
            <div v-for="item in activeRoom.messages" v-bind:key="item.id">
                <!--  時間 -->
                <p class="time">
                    <span>{{ item.date | time }}</span>
                </p>
                <div class="main">
                    <!-- アバター画像 -->
                    <img class="avatar" width="30" height="30" :src="item.self ? getUser.img : activeRoom.user.img" />
                    <!-- コンテンツ -->
                    <div class="text">{{ item.content }}</div>
                </div>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

import { mapGetters, mapActions } from 'vuex'

export default {
    computed: 
        mapGetters([
            'getUser',
            'activeRoom'
        ]),
    filters: {
        time (date) {
            if (typeof date === 'string') {
                date = new Date(date);
            }
            return date.getHours() + ':' + date.getMinutes();
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.message {
    li {
        margin-bottom: 15px;
    }
    .time {
        margin: 5px 0;
        text-align: center;

        > span {
            display: inline-block;
            padding: 5px;
            font-size: 12px;
            color: #eee;
            border-radius: 2px;
            background-color: #989898;
        }
    }
    .avatar {
        padding: 0 10px;
        float: left;
        height: 45px;
        width: 45px;
        margin: 0 10px 0 0;
        border-radius: 5px;
    }
    .text {
        display: inline-block;
        position: relative;
        padding: 0 10px;
        max-width: ~'calc(100% - 40px)';
        min-height: 50px;
        line-height: 2.5;
        font-size: 14px;
        text-align: left;
    }
}
</style>