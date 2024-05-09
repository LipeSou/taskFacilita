<script setup lang="ts">
import AddIcon from '@/assets/images/AddIcon.vue'
import ButtonFacilita from '@/components/common/ButtonFacilita.vue'
</script>

<template>
  <div class="button-add-taks-container">
    <ButtonFacilita :roundedButton="true" width="77px" height="77px" backgroundColor="#1AD18F">
      <AddIcon />
    </ButtonFacilita>
  </div>
</template>

<style scoped lang="stylus">
.button-add-taks-container
  position: fixed
  bottom: 23px
  right: 28px
</style>
