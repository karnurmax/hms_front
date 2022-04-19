<template>
    <div id="login">
        <h1>Войти</h1>
        <input v-model="input.username" type="text" placeholder="Логин" class="login"/>
        <input v-model="input.password" type="password" placeholder="Пароль" class="password"/>
        <button type="button" v-on:click="login()" class="button">Войти</button>
    </div>
</template>
<script>
    export default {
        name: 'LoginPage',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {}
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
    .login {
      border: 1px solid grey;
      outline: none;
      padding: 5px;
    }
    .password {
      border: 1px solid grey;
      outline: none;
      padding: 5px;
    }
    .button {
      border: 1px solid grey;
      padding: 5px;
      background-color: #c9b826;
    }
</style>