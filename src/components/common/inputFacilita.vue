<script setup lang="ts">
import SearchIcon from '@/assets/images/SearchIcon.vue'
import { computed, defineEmits } from 'vue'

const { modelValue, placeholder, type, label, isSeachComponent, width, height } = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  label: {
    type: String || null,
    default: null
  },
  isSeachComponent: {
    type: Boolean,
    default: false
  },
  isTextArea: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '55px'
  }
})

const emit = defineEmits(['update:modelValue'])

function updateValue(event: any) {
  emit('update:modelValue', event?.target?.value)
}

const inputStyles = computed(() => ({
  width,
  height
}))
</script>

<template>
  <div class="input-container">
    <label v-if="label" class="label" for="username">{{ label }}</label>
    <component
      :is="isTextArea ? 'textarea' : 'input'"
      :class="['input', isSeachComponent ? 'is-search-background' : '']"
      :type="type"
      :value="modelValue"
      @input="updateValue"
      :placeholder="placeholder"
      :style="inputStyles"
    />
    <i v-if="isSeachComponent" class="icon-lupa">
      <SearchIcon />
    </i>
  </div>
</template>

<style scoped lang="stylus">
.input-container
  position: relative
  display: flex
  flex-direction: column

.label
  color: $text
  font-weight: 600
  font-size: 14px
  margin-bottom: 5px

.input
  padding: 15px 40px 15px 15px
  border-radius: 5px
  border: 2px solid #BFDAEB
  font-size: 18px
  &:hover, &:focus
    border: 2px solid $primary-color

.icon-lupa
  position: absolute
  right: 10px
  top: 14px
  font-size: 20px
  color: #A6C1D2

.is-search-background
  background: none

::placeholder
  color: #A6C1D2;
  font-size: 18px;
  font-weight: 600;
</style>
