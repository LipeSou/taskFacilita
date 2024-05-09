<script setup lang="ts">
defineProps<{
  tag: string
}>()
</script>

<template>
  <p class="tag">{{ tag }}</p>
</template>

<style scoped lang="stylus">
.tag
  color: #304458
  font-size: 15px
  font-weight: 600
</style>
