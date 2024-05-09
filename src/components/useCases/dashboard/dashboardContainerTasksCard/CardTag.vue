<script setup lang="ts">
import { priority } from '@/types/tasks'

defineProps<{
  tag: string
}>()
</script>

<template>
  <div :class="tag === priority.URGENT ? 'tag-urgent' : 'tag-alert'">
    <p class="tag-text">{{ tag }}</p>
  </div>
</template>

<style scoped lang="stylus">
.tag-alert
  background-color: $alert
  padding: 4px 10px 4px 10px
  border-radius: 40px

.tag-urgent
  background-color: rgba(255, 46, 121, 0.5)
  padding: 4px 10px 4px 10px
  border-radius: 40px

.tag-text
  color: #FFF
  font-size: 12px
  font-weight: 600
</style>
