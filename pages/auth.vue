<template>
<div id="auth">
    <div id="login">
        <h1>Войти</h1>
        <input v-model="input.username" type="text" name="username" placeholder="Логин" class="login"/>
        <input v-model="input.password" type="password" name="password" placeholder="Пароль" class="password"/>
        <NuxtLink class="signin" nuxt to="/" > Войти </NuxtLink>
    </div>
    <NuxtLink class="registration" nuxt to="/signup" > Регистрация </NuxtLink>
</div>
</template>

<script>
    export default {
        name: 'AuthPage',
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
                alert('Welcome')
            }
        }
    }
</script>

<style scoped>
    h1 {
      margin-bottom: 10px;
    }
    #auth {
      width: 530px;
      border: 1px solid #CCCCCC;
      background-color: #FFFFFF;
      margin: auto;
      margin-top: 200px;
      padding: 20px;
    }
    .login {
      padding: 5px;
      outline: none;
      border: 1px solid grey;
    }
    .password {
    padding: 5px;
    outline: none;
    border: 1px solid grey;
    }
    .signin {
    padding: 5px;
    outline: none;
    border: 1px solid grey;
    background-color: #d69034;
    display: inline-block;
    text-decoration: none;
    color: black;
    }
    .registration {
    margin-top: 10px;
    padding: 5px;
    outline: none;
    border: 1px solid grey;
    background-color: #d69034;
    display: inline-block;
    text-decoration: none;
    color: black;
    }
</style>