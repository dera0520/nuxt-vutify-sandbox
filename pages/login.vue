<template>
  <v-card class="mt-5 mx-auto" max-width="600">
    <v-form ref="form">
      <v-container>
        <v-row justify="center">
          <p cols="12" class="mt-3 display-1 grey--text">
            ログイン
          </p>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="10" sm="10">
            <v-text-field
              v-model="model.email"
              label="Eメールアドレス"
              prepend-icon="mdi-account-circle"
            />
            <p class="caption mb-0"/>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="10" sm="10">
            <v-text-field
              v-model="model.password"
              v-bind:type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock"
              v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" label="パスワード"
              @click:append="showPassword = !showPassword"/>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="10" sm="10">
            <v-btn
              block
              class="mr-4 blue white--text"
              @click="login"
            >
              ログイン
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  layout: 'no_header',
  data: () => ({
    showPassword: false,
    model: {
      email: "",
      password: ""
    }
  }),
  methods: {
    async login() {
      await this.$store.dispatch('user/login', {email: this.model.email, password: this.model.password})
      if (!this.$store.state.user.user.uid){
        await this.$router.push('/form')
      }
    }
  }
}

</script>
