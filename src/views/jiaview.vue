<script setup>
import { ref } from 'vue';
const max = 9;//用于控制随机产生数字的最大限制。
function random(max) {
  let num1 = Math.ceil(Math.random()*max);
  let num2 = Math.ceil(Math.random()*max);
  return num1+' + '+num2;
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
