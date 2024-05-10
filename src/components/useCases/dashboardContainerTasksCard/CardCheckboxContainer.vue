<script setup lang="ts"></script>

<template>
  <div class="checkbox-container">
    <slot></slot>
  </div>
</template>

<style scoped lang="stylus">
.checkbox-container
  display: flex
  align-items: center
  gap: 13px
</style>
