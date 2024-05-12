<script setup lang="ts">
defineProps<{
  description: String
  completed: Boolean
}>()
</script>

<template>
  <p :class="completed ? 'description-text-completed' : 'description-text'">{{ description }}</p>
</template>

<style scoped lang="stylus">
.description-text
  width: 425px
  color: #304458
  font-size: 15px
  font-weight: 600
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
  @media (max-width: 968px)
    width 210px

.description-text-completed
  color: rgba(48, 68, 88, 0.5)
  font-size: 15px
  font-weight: 600
  text-decoration: line-through
</style>
