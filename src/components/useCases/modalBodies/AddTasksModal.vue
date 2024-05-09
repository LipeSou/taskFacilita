<script setup lang="ts">
import ButtonFacilita from '@/components/common/ButtonFacilita.vue'
import InputFacilita from '@/components/common/InputFacilita.vue'
</script>

<template>
  <div class="input-title">
    <InputFacilita :label="'Título:'" type="text" :width="'578px'" />
  </div>

  <InputFacilita
    :label="'Descrição:'"
    :isTextArea="true"
    type="text"
    :width="'578px'"
    :height="'183px'"
  />
  <ButtonFacilita
    :additionalStyles="{
      'margin-bottom': '36px'
    }"
    class="button"
    backgroundColor="#16D08D"
  >
    Adicionar
  </ButtonFacilita>
</template>

<style scoped lang="stylus">
.input-title
  margin-top:40px
  margin-bottom: 15px
</style>
