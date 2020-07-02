<template>
  <v-container>
    <v-row>
      <v-col cols = "12" md = "4">
        <h2>Sign In</h2>
        <form>
          <v-text-field v-model="email" :counter = "10" label = "Email" data-vv-name = "email" required></v-text-field>
          <v-text-field
            v-model="password"
            label="password"
            data-vv-name="password"
            required
          >
          </v-text-field>
          <v-btn class="mr-4" v-on:click="login"></v-btn>
          <p v-if="error" class="errors">{{ error }}</p>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import firebase from '@/plugins/firebase'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          console.log(error)
          this.error = ((code) => {
            switch (code) {
              case 'auth/user-not-found':
                return 'メールアドレスの確認をお願いします'
              case 'auth/wrong-password':
                return 'パスワードに不備があるようです'
              default:
                return 'メールアドレスとパスワードの確認をお願いします'
            }
          })(error.code)
        })
    }
  }
}
</script>
<style scoped>
.errors {
  color: red;
  margin-top: 20px;
}
</style>
