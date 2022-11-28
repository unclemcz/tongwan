<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="/favicon.ico" alt="Logo" width="24" height="24" class="d-inline-block align-text-top">
        返回
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">童玩</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/shu">数字</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/shi">古诗</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link disabled" to="/">汉字</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link disabled" to="/">拼音</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link disabled" to="/">形状</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
