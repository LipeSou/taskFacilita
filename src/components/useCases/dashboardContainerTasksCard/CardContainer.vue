<script setup lang="ts">
defineProps<{
  completed: Boolean
}>()
</script>

<template>
  <div :class="['card-container', completed ? 'background-completed' : 'background']">
    <slot></slot>
  </div>
</template>

<style scoped lang="stylus">
.card-container
  width: 633px
  height: 64px
  border-radius: 5px
  box-shadow: 0px 1px 6px 0px rgba(40, 56, 72, 0.10)
  margin-bottom: 7px
  display: flex
  align-items: center
  justify-content: space-between
  padding: 14px
  @media (max-width: 968px)
    width: 400px
  @media (max-width: 768px)
    flex-direction: column
    width: 300px
    height: 100%
    align-items: start
    gap: 20px


.background
  background: white

.background-completed
  background: rgba(255, 255, 255, 0.5)
</style>
