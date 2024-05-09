<script setup lang="ts">
import ButtonAddTasks from '../buttonAddTasks/buttonAddTasks.vue'
import DashboardContainerLateral from './DashboardContainerLateral.vue'
import DashboardContainerTasks from './DashboardContainerTasks.vue'
import Header from './Header.vue'
</script>
<template>
  <div>
    <Header />
    <div class="dashboard-container">
      <DashboardContainerLateral />
      <DashboardContainerTasks />
    </div>
    <ButtonAddTasks />
  </div>
</template>

<style scoped lang="stylus">
.dashboard-container
  display: flex
</style>
