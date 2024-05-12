<script setup lang="ts">
import ButtonFacilita from '@/components/common/ButtonFacilita.vue'
import InputFacilita from '@/components/common/InputFacilita.vue'
import router from '@/router'

const login = () => {
  router.push('/dashboard')
}
</script>
<template>
  <div class="login-container">
    <div class="login-containt">
      <h2 class="title">Entre com seus dados de acesso</h2>
      <form @submit.prevent="login">
        <InputFacilita label="Nome de usuário ou e-mail:" type="text" />
        <div class="divider"></div>
        <InputFacilita label="Senha:" type="password" />
        <ButtonFacilita
          :additionalStyles="{
            'margin-bottom': '42px'
          }"
          backgroundColor="#1AD18F"
          @click="login"
          >Entrar</ButtonFacilita
        >
        <p><a href="#" class="forget-password">Esqueci minha senha</a></p>
      </form>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.login-container
  display: flex
  align-items: center
  justify-content: center

.login-containt
  @media (max-width: 530px)
    width: 90%

.title
  margin-bottom: 36px
  color: $text-bold

.input-container
  display: flex
  flex-direction: column

.label
  color: $text
  font-weight: 600
  font-size: 14px
  margin-bottom: 5px

.input
  height: 55px
  padding: 15px
  border-radius: 5px
  border: 2px solid #BFDAEB
  font-size: 20px
  &:hover, &:focus
    border: 2px solid $primary-color

.divider
  margin-bottom: 22px

.button
  width: 100%
  border-radius: 5px
  background-color: $secondary-color
  padding: 19px
  color: white
  font-size: 16px
  font-weight: 700
  margin-top: 18px
  margin-bottom: 42px

.forget-password
  color: $primary-color
  font-weight: 600
  font-size: 13px
</style>
