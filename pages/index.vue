<script setup>
import DmgCalc from '~/components/dmg-calc'
</script>

<template>
  <div class="root">
    <div class="calcs-container">
      <DmgCalc/>
      <!-- <DmgCalc/> -->
    </div>
  </div>
</template>

<style scoped>
    .root {
        background-color: #202124;
        height: 100vh;
        width: 100vw;
        padding: 10px;
        color: #bdc1c6;
        overflow: hidden;
    }

    .calcs-container {
      height: 100%;
      overflow: auto;
      display: flex;
      gap: 50px;
    }
</style>