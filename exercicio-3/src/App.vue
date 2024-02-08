<template>
  <div id="app">
    <div class="bcc-header-container">
        <header>
            <HeaderLogo />
            <div class="header-nav">
                <h1><b>UFRN - Bacharelado em Ciências da Computação</b></h1>
                <nav>
                    <ul class="nav-items">
                        <div id="nav">
                            <router-link class='nav-route' to="/">Home</router-link>
                            <router-link class='nav-route' to="/about">Sobre</router-link>
                            <li><a class="nav-link" href="https://www.ufrn.br">UFRN</a></li>
                            <li><a class="nav-link" href="https://www.dimap.ufrn.br">DIMAP</a></li>
                            <li><a class="nav-link" href="https://petcc.dimap.ufrn.br">PETCC</a></li>
                            <li><a class="nav-link" href="https://www.metropoledigital.ufrn.br/portal/">IMD</a></li>
                        </div>
                        <div class="nav-login">
                            <router-link id='log' class='nav-route' v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
                            <router-link id='log' class='nav-route' v-else to="/login">Login</router-link>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
        <hr>
    </div>
    <router-view @authenticated="setAuthenticated"/>
  </div>
</template>

<script>
import HeaderLogo from "./components/HeaderLogo.vue";
    export default {
    name: "App",
    data() {
        return {
            authenticated: false,
            // this is only for testing purposes no actual app will have this
            // an api call will validate user credentials
            mockAccount: {
                username: "petcc",
                password: "123"
            }
        };
    },
    methods: {
        setAuthenticated(status) {
            this.authenticated = status;
        },
        logout() {
            this.authenticated = false;
        }
    },
    components: { HeaderLogo }
}
</script>

<style>
@import 'assets/css/homepage_completo.css';
@import 'assets/css/calculator.css';
@import 'assets/css/login.css';
</style>
