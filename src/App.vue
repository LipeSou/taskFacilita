<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style lang="stylus">
*
  margin: 0
  padding: 0
  box-sizing: border-box
  color: $text

html, body
  font-family: 'SVN-Gilroy', sans-serif
  height: 100%
  width: 100%

button, input, textarea
  font-family: inherit

button
  border: none
  cursor: pointer
</style>
