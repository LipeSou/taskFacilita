<script setup lang="ts">
import router from '@/router'

const login = () => {
  router.push('/dashboard')
}
</script>
<template>
  <div class="login-container">
    <div>
      <h2 class="title">Entre com seus dados de acesso</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Nome de usuário ou e-mail:</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label for="password">Senha:</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Entrar</button>
        <p><a href="#">Esqueci minha senha</a></p>
      </form>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.login-container
  display: flex
  align-items: center
  justify-content: center
</style>
