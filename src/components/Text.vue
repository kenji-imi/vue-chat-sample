<template>
    <div class="message_text">
        <!-- テキストエリア -->
        <textarea placeholder=" Ctrl + Enter " v-model="content" @keyup="onKeyup"></textarea>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data () {
        return {
            content: ''
        };
    },
    methods: {
        ...mapActions([
            'sendMessage'
        ]),
        onKeyup (e) {
            if (e.ctrlKey && e.keyCode === 13 && this.content.length) {
                this.sendMessage(this.content);
                this.content = '';
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.message_text {
    height: 160px;
    border-top: solid 1px #ddd;

    textarea {
        padding: 10px;
        height: 100%;
        width: 100%;
        font-size: 14px;
    }
}
</style>