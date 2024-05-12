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
  @media (max-width: 768px)
    grid-template-columns: 60px 1fr
  @media (max-width: 530px)
    grid-template-columns:  1fr
</style>
