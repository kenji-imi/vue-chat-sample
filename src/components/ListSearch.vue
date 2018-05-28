<template>
    <div class="list-search">
        <div>
            <!-- アバター画像 -->
            <img class="avatar" width="40" height="40" :alt="getUser.name" :src="getUser.img">
            <!-- 名前 -->
            <p class="name">{{getUser.name}}</p>
        </div>
        <div>
            <!-- 検索フォーム -->
            <input class="search" type="text" placeholder="search user" @keyup="onKeyup">
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: 
        mapGetters([
            'getUser'
        ]),
    methods: {
        ...mapActions([
            'search'
        ]),
        onKeyup (e) {
            this.search(e.target.value);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.list-search {
    padding: 12px;
    border-bottom: solid 1px #252525;

    .avatar {
        border-radius: 2px;
        vertical-align: middle;
    }
    .name {
        display: inline-block;
        margin: 0 0 0 15px;
        font-size: 16px;
        vertical-align: middle;
    }
    .search {
        padding: 0 10px;
        width: 100%;
        font-size: 12px;
        color: #fff;
        height: 30px;
        line-height: 30px;
        border: solid 1px #3a3a3a;
        border-radius: 4px;
        outline: none;
        background-color: #26292E;
    }
}
</style>