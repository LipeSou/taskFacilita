<script setup lang="ts">
import Icon from '@/assets/images/Icon.vue'
</script>
<template>
  <div class="app-description">
    <div>
      <Icon />
      <h1 class="title"><span class="title-bold">FACILITA</span>TASKS</h1>
      <p class="description">Gestão de tarefas pessoais</p>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.app-description
  background-color: $primary-color
  display: flex
  align-items: center
  justify-content: center

.title
  color: white
  font-weight: 500
  font-size: 48px

.title-bold
  font-weight: 700
</style>
