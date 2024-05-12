<script setup lang="ts">
import Icon from '@/assets/images/Icon.vue'
</script>
<template>
  <div class="container-lateral-menu">
    <Icon class="icon" />
  </div>
</template>

<style scoped lang="stylus">
.container-lateral-menu
  background-color: $primary-color
  display: flex
  justify-content: center
  @media (max-width: 530px)
    display: none
.icon
  width: 50px
  height: 50px
  margin-top: 17px
</style>
