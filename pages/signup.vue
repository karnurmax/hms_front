<template>
  <div id="registration">
    <h1>Регистрация</h1>
      <input
        v-model="input.name"
        type="text"
        placeholder="Имя"
        class="name"
      />
      <input
        v-model="input.surname"
        type="text"
        placeholder="Фамилия"
        class="lastname"
      />
      <input
        v-model="input.login"
        type="text"
        placeholder="Логин"
        class="login"
      />
      <input
        v-model="input.password"
        type="password"
        placeholder="Пароль"
        class="password"
      />
      <input
        v-model="input.confirmPassword"
        type="password"
        placeholder="Подтвердите пароль"
        class="password"
      />
      <div>
          <button type="button" class="registration" @click="registration()">Зарегестрироваться</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'RegistrationPage',
  data() {
    return {
      input: {
        name: '',
        surname: '',
        password: '',
        confirmPassword: ''
      },
    }
  },
  methods: {
    registration() {
      alert('Вы прошли регистрацию')
    }
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
      margin-top: 200px;
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
