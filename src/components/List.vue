<template>
    <div class="list">
        <ul>
            <li v-for="s in listRooms" v-bind:key="s.id" :class="{ active: s.id === getCurrentRoomId }" @click="selectRoom(s.id)">
                <!-- アバター画像 -->
                <img class="avatar" width="30" height="30" :alt="s.user.name" :src="s.user.img">
                <!-- ユーザー名 -->
                <p class="name">{{s.user.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed:
        mapGetters([
            'listRooms',
            'getCurrentRoomId'
        ]),
    methods:
        mapActions([
            'selectRoom'
        ])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.list {
    li {
        padding: 10px 15px;
        border-bottom: 1px solid #302F55;
        cursor: pointer;
        transition: background-color .1s;

        &:hover {
            background-color: rgba(255, 255, 255, 0.03);
        }
        &.active {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
    .avatar {
        border-radius: 2px;
        vertical-align: middle;
    }
    .name {
        display: inline-block;
        margin: 0 0 0 15px;
        vertical-align: middle;
    }
}
</style>