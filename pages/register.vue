<template>
<div>

<form @submit.prevent="register" id="registration">
    <h1>Регистрация</h1>
      <label for="name">Имя</label>
      <div>
          <input id="name" type="text" v-model="name" required autofocus class="name" placeholder="Имя">
      </div>
      
      <label for="name">Фамилия</label>
      <div>
          <input id="name" type="text" v-model="surname" required autofocus class="surname" placeholder="Фамилия">
      </div>
      
      <label for="email" >Почта</label>
      <div>
          <input id="email" type="email" v-model="email" required class="email" placeholder="Почта">
      </div>
      
      <label for="password">Пароль</label>
      <div>
          <input id="password" type="password" v-model="password" required class="password" placeholder="Пароль">
      </div>
      
      <label for="password-confirm">Подтвердите пароль</label>
      <div>
          <input id="password-confirm" type="password" v-model="password_confirm" required class="password-confirm" placeholder="Подтвердите пароль">
      </div>
      
      <div>
          <button type="submit" class="registration">Зарегестрироваться</button>
      </div>
    </form>
</div>
</template>

<script>
export default {
  name: 'RegistrationPage',

  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      password_confirm: '',
    }
  },

  methods: {
    register() {
      const data = {
      name: this.name,
      surname: this.surname,
      email: this.email,
      password: this.password,
      password_confirm: this.password_confirm,
      }

      this.$store.dispatch('register', data)

      this.$router.push('/')
    }
  },

}
</script>

<style scoped>
    h1 {
      margin-bottom: 10px;
    }
    #registration {
      width: 350px;
      border: 1px solid #CCCCCC;
      background-color: #FFFFFF;
      margin: auto;
      margin-top: 10px;
      padding: 20px;
      border: 1px solid black;
    }
    .name {
      padding: 5px;
      outline: none;
      border: 1px solid grey;
    }
    .surname {
    padding: 5px;
    outline: none;
    border: 1px solid grey;
    }
    .email {
    padding: 5px;
    outline: none;
    border: 1px solid grey;
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
    .password-confirm {
    padding: 5px;
    outline: none;
    border: 1px solid grey;
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
