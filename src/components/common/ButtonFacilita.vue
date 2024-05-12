<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: ''
  },
  backgroundColor: {
    type: String,
    default: '#007BFF'
  },
  color: {
    type: String,
    default: '#FFFFFF'
  },
  buttonText: {
    type: String,
    default: 'Click Me'
  },
  roundedButton: {
    type: Boolean,
    default: false
  },
  additionalStyles: {
    type: Object as () => Record<string, string | number>,
    default: () => ({})
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const onClick = () => {
  emit('click')
}

const buttonStyles = computed(() => ({
  width: props.width,
  height: props.height,
  backgroundColor: props.disabled ? '#A6C1D2' : props.backgroundColor,
  color: props.color,
  borderRadius: props.roundedButton ? '100%' : '5px',
  padding: '19px',
  fontSize: '16px',
  fontWeight: '700',
  marginTop: '18px',
  cursor: props.disabled ? 'not-allowed !important' : 'pointer',
  ...props.additionalStyles
}))
</script>

<template>
  <button :style="buttonStyles" type="submit" @click="onClick" :disabled="disabled">
    <slot></slot>
  </button>
</template>
