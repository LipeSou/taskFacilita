<script setup lang="ts">
import DashboardContainer from './DashboardContainer.vue'
import LateralMenu from './LateralMenu.vue'
</script>
<template>
  <div class="container">
    <LateralMenu />
    <DashboardContainer />
  </div>
</template>

<style scoped lang="stylus">
.container
  display: grid
  grid-template-columns: 106px 1fr
  height: 100 vh
  background-color: $gray-color
</style>
