<script setup>
import { ref } from 'vue';
const max = 10;//用于控制随机产生数字的最大限制。
function random(max) {
  return Math.floor(Math.random()*max)
}

function randshuzi() {
  shuzi.value = random(max);
}

const shuzi = ref(random(max));
</script>


<template>
  <div @click="randshuzi" class="shuzi">
    <div >{{shuzi}}</div>
  </div>
</template>

<style>

.shuzi {
  align-items: center;
  margin-top: 0px;
  text-align:center;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  font-size:20rem;
  /* line-height: 20vh; */
}

</style>
