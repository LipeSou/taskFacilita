<script setup lang="ts">
import AppDescription from './AppDescription.vue'
import LoginContainer from './LoginContainer.vue'
</script>
<template>
  <div class="container">
    <AppDescription />
    <LoginContainer />
  </div>
</template>

<style scoped lang="stylus">
.container
  display: grid
  grid-template-columns: 36% 64%
  height: 100 vh
</style>
