<template>
   <div>
      <div class="bcc-main-content">
        <main>
            <section class="sec-main-content">
                <div class="container">
                    <h1>Perfil do Usuário</h1>
                    <div class="profile-info">
                        <div class="profile-row">
                            <h3>Nome:</h3>
                            <p>{{ $parent.mockAccount.username }}</p>
                        </div>
                        <div class="profile-row">
                            <h3>Email:</h3>
                            <p>{{ $parent.mockAccount.email  }}</p>
                        </div>
                        <div class="profile-row">
                            <h3>Senha:</h3>
                            <p>{{ $parent.mockAccount.password }}</p>
                        </div>
                        <div class="profile-row">
                            <h3>Encargo:</h3>
                            <p>{{ $parent.mockAccount.role  }}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
    <div class="bcc-footer-conteiner">
        <footer>
            <div class="footer-sec">
                <p>Telefone - (84) 3342-2299
                    cccc@dimap.ufrn.</p>
                <p>Natal/RN - Brasil</p>
            </div>
            <div class="footer-sec">
                <p>© 2023, Universidade Federal do Rio Grande do Norte.</p>
            </div>
        </footer>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Profile',
    mounted() {
        if (!this.$parent.authenticated) {
            this.$router.replace({ name: "Login" });
        }
    }
}
</script>

<style scoped>
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
}
.container {
    border: 1px solid white;
    width: 40%;
    margin: 20px auto;
    background-color: #183672;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h1 {
    text-align: center;
    background: linear-gradient(45deg, #163e8f, #0b1d41);
    padding: 10px 0;
    border-radius: 20px 20px 0px 0px;
}
.profile-info {
    margin-top: 10px;
    padding: 20px;
}
.profile-row {
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}
.profile-row h3 {
    font-size: 19px;
    border-radius: 20px;
    padding: 10px;
    margin: 0;
}
.profile-row p {

    font-size: 19px;
    flex: 1;
    text-align: center;
    border-radius: 20px;
    padding: 10px;
    margin: 0;
}
</style>