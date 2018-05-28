import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const now = new Date();

const getters = {
  listRooms: ({ }) => state.rooms.filter(room => room.user.name.includes(state.filterKey)),
  getCurrentRoomId: ({ }) => state.currentRoomId,
  getUser: ({ }) => state.user,
  activeRoom: ({ }) => state.rooms.find(room => room.id === state.currentRoomId)
}

const state = {
  currentRoomId: 1,
  filterKey: '',
  user: {
    name: 'kenji',
    img: 'static/icon_0_github.png'
  },
  rooms: [
    {
      id: 1,
      user: {
        name: 'vue',
        img: 'static/icon_1_vue.png'
      },
      messages: []
    },
    {
      id: 2,
      user: {
        name: 'webpack',
        img: 'static/icon_2_webpack.png'
      },
      messages: []
    }
  ]
}

const mutations = {
  // ミューテーションをコミットすることで、Vuexのストアの状態を変更できる

  // ハンドラ
  INIT_DATA(state) {
    let data = localStorage.getItem('vue-chat-room');
    if (data) {
      state.rooms = JSON.parse(data);
    }
  },
  SEND_MESSAGE(state, content) {
    let room = state.rooms.find(item => item.id === state.currentRoomId);
    room.messages.push({
      content: content,
      date: new Date(),
      self: true
    });
  },
  // ハンドラ
  SELECT_ROOM(state, id) {
    state.currentRoomId = id;
  },
  // ハンドラ
  SET_FILTER_KEY(state, value) {
    state.filterKey = value;
  }
}

const actions = {
  initData: ({ commit }) => commit('INIT_DATA'),
  sendMessage: ({ commit }, content) => commit('SEND_MESSAGE', content),
  selectRoom: ({ commit }, id) => commit('SELECT_ROOM', id),
  search: ({ commit }, value) => commit('SET_FILTER_KEY', value)
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

// リアクティブにゲッター関数の返す値を監視
// 値が変わった場合は、コールバックを呼ぶ
store.watch(
  (state) => state.rooms,
  (val) => {
    localStorage.setItem('vue-chat-room', JSON.stringify(val));
  },
  {
    deep: true
  }
);

export default store;