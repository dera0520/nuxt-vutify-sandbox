import firebase from '~/plugins/firebase'

export default async function ({route, store, redirect}) {
  const user = await new Promise((resolve) => {
    firebase.auth().onAuthStateChanged((user) => {
      resolve(user)
    })
  })

  // ユーザーが認証されていないとき
  if (!user) {
    if (route.name !== "login") {
      redirect("/login")
    }
  } else {
    store.dispatch("user/setUser", user)
    if (route.name === "login") {
      redirect("/")
    }
  }
}
