<script setup>
import { RouterLink, RouterView } from 'vue-router'
import theheader from './components/theheader.vue'
import myfooter from './components/thefooter.vue'
</script>

<template>
  <header>
    <theheader/>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
