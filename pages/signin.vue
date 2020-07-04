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
          <v-btn class="mr-4" v-on:click="login">ログイン</v-btn>
          <p v-if="error" class="errors">{{ error }}</p>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

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
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
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
