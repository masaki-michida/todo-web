<template>
  <div>
    <div v-if = 'user'>
      <p>Email: {{ user.email }}</p>
      <p>ユーザー名: {{ user.name }}</p>
    </div>
    <v-btn v-on:click="logOut">ログアウト</v-btn>
  </div>
</template>
<script>
import firebase from '@/plugins/firebase'
export default {
  computed: {
    user () {
      return this.$store.state.currentUser
    }
  },
  methods: {
    logOut () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.commit('setUser', null)
          this.$router.push('/')
        })
    }
  }
}
</script>
