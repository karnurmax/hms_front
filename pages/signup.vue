<template>
  <div id="registration">
    <h1>Регистрация</h1>
      <input
        v-model="userData.name"
        type="text"
        placeholder="Имя"
        class="name"
      />
      <input
        v-model="userData.surname"
        type="text"
        placeholder="Фамилия"
        class="lastname"
      />
      <input
        v-model="userData.login"
        type="text"
        placeholder="Логин"
        class="login"
      />
      <input
        v-model="userData.password"
        type="password"
        placeholder="Пароль"
        class="password"
      />
      <input
        v-model="userData.confirmPassword"
        type="password"
        placeholder="Подтвердите пароль"
        class="password"
      />

      <Info />

      <div>
          <button type="button" class="registration" @click="registration">Зарегестрироваться</button>
      </div>

    </div>
</template>

<script>
import Info from "./info.vue";

export default {
  name: 'RegistrationPage',

  components: {
    Info
  },

  data() {
    return {
      userData: { name: '', surname: '', login: '', password: '', confirmPassword: '' }
    }
  },

  methods: {
    registration() {}
  },

}
</script>

<style scoped>
    h1 {
      margin-bottom: 10px;
    }
    #registration {
      width: 500px;
      border: 1px solid #CCCCCC;
      background-color: #FFFFFF;
      margin: auto;
      margin-top: 100px;
      padding: 20px;
    }
    .name {
      padding: 5px;
      outline: none;
      border: 1px solid grey;
      margin: 10px;
    }
    .lastname {
    padding: 5px;
    outline: none;
    border: 1px solid grey;
    }
    .login {
    padding: 5px;
    outline: none;
    border: 1px solid grey;
    margin-left: 10px;
    }
    .password {
    padding: 5px;
    outline: none;
    border: 1px solid grey;
    margin: 10px;
    }
    .registration {
    margin-top: 10px;
    margin-left: 10px;
    padding: 5px;
    outline: none;
    border: 1px solid grey;
    background-color: #d69034;
    display: inline-block;
    text-decoration: none;
    color: black;
    }
</style>
