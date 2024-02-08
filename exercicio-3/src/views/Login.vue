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
                    <button type="button" v-on:click="login()">Login</button>
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
                if(this.input.username != "" && this.input.password != "") {
                    // This should actually be an api call not a check against this.$parent.mockAccount
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "Secure" });
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
