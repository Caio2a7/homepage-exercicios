<template>
    <div class='login-background'>
        <div id="login">
            <h1>Login</h1>
            <form>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" v-model="input.username" placeholder="Username" />
                <label for="password">Password</label>
                <input type="password" id="password" name="password" v-model="input.password" placeholder="Password" />
                <div class="button">
                    <button type="button" v-on:click="login()">Entrar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      if (this.input.username !== "" && this.input.password !== "") {
        // Esta parte deve ser uma chamada de API, não apenas uma verificação local
        if (this.input.username === this.$parent.mockAccount.username && this.input.password === this.$parent.mockAccount.password) {
          this.$emit("authenticated", true);
          // Emitindo o evento diretamente para o componente Home.vue
          this.$bus.$emit("username", this.input.username);
          this.$router.replace({ name: "Profile" });
        } else {
          alert("Username ou senha incorreta");
        }
      } else {
        alert("Preencha o formulário");
      }
    }
  }
}
</script>

