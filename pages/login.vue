<template>
<div >
   <form id="auth" @submit.prevent="login">
     <h1>Вход</h1>
        <label>Логин</label>
        <input required v-model="username" type="username" placeholder="Логин" class="login"/>
        <label>Пароль</label>
        <input required v-model="password" type="password" placeholder="Пароль" class="password"/>
     <hr/>
     <button type="submit" class="signin">Войти</button>
   </form>
   <div class="reg-block">
    <p>Еще не зарегестрированы?</p>
    <NuxtLink class="registration" nuxt to="/register" > Регистрация </NuxtLink>
    </div>
</div>
</template>

<script>
    export default {
        name: 'LoginPage',
        
        data() {
            return {
              username: "",
              password: ""
            }
        },
        
        methods: {
          login() {
            const data = {
            username: this.username,
            password: this.password
          }
          this.$store.dispatch('login', data)
          this.$router.push('/');
          }
        }

    }
</script>

<style scoped>
    h1 {
      margin-bottom: 10px;
    }
    p{
      margin: 5px 0px 5px 0px;
    }
    hr {
      margin: 10px 0px;
    }
    label {
      display: block;
    }
    #auth {
      width: 350px;
      border: 1px solid black;
      background-color: #FFFFFF;
      margin: auto;
      margin-top: 10px;
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
    margin-bottom: 10px;
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
    margin: 0px;
    padding: 5px;
    outline: none;
    border: 1px solid grey;
    background-color: #d69034;
    display: inline-block;
    text-decoration: none;
    color: black;
    }
    .reg-block {
      width: 350px;
      margin: 0 auto;
    }
</style>