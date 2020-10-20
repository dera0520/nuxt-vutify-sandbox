import firebase from "@/plugins/firebase";

export const state = () => ({
  user: {
    uid: null,
    email: null
  }
})

export const mutations = {
  setUser(state, payload) {
    state.user.uid = payload.uid
    state.user.email = payload.email
  },
  resetUser(state, payload) {
    state.user.uid = null
    state.user.email = null
  }
}

export const actions = {
  // ユーザーログインを行います。
  login: ({commit, dispatch}, payload) => {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
          commit('setUser', {uid: res.user.uid, email: res.user.email});
        }
      )
      .catch(err => {
          commit('resetUer');
        }
      )
  },
  setUser({commit}, payload) {
    commit('setUser', {uid: payload.uid, email: payload.email});
  },
  // ログアウトを行います。
  logout: ({commit}) => {
    return firebase.auth().signOut();
  },
}
