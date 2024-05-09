<script setup lang="ts">
import XIcon from '@/assets/images/XIcon.vue'

const { showDialog } = defineProps({
  showDialog: {
    type: Boolean,
    default: false
  },
  title: {
    type: String || null,
    default: null
  }
})

defineEmits(['on-close'])
</script>

<template>
  <div>
    <div v-if="showDialog" class="dialog-overlay">
      <div class="dialog-content">
        <div class="header" v-if="title">
          <h2 class="title">{{ title }}</h2>
          <div class="x-icon" @click="$emit('on-close')">
            <XIcon />
          </div>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.dialog-overlay
  position:fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.5)
  display: flex
  align-items: center
  justify-content: center


.dialog-content
  background-color: white
  padding: 20px
  min-width: 425px
  border-radius: 8px
  box-shadow: 0px 20px 30px 0px rgba(119, 137, 158, 0.5)

.header
  display: flex
  justify-content: space-between

.title
  color: $text-bold
  font-size: 25px
  font-weight: 700

.x-icon
  cursor: pointer
</style>
