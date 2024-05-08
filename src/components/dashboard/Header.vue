<script setup lang="ts"></script>
<template>
  <div class="container">
    <div class="account-container">
      <Avatar />
      <div class="avatar"></div>
      <div>
        <p class="name">Eduardo Pereira da Costa</p>
        <p class="carrer">Front-end Developer</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.container
  height: 83px
  background-color: white
  box-shadow: 0px 1px 6px 0px rgba(40, 56, 72, 0.07);
  display: flex
  flex-direction: column
  justify-content: center
  align-items: end
  z-index: 100

.account-container
  display: flex
  align-items: center
  margin-right: 33px

.avatar
  background-color: red
  width: 47px;
  height: 47px;
  border-radius: 100%
  margin-right: 20px
  background: url('@/assets/images/avatar.png') lightgray 50% / cover no-repeat;

.name
  color: $text-bold
  font-size: 15px
  font-weight: 600

.carrer
  color: #2693FF
  font-size: 12px
  font-weight: 600
</style>
