<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './layouts/Navbar.vue'
import Header from './layouts/Header.vue'

document.title = 'Vue 3 + Vite + TypeScript + Tabler'
</script>

<template>
  <div class="page">
    <Navbar />
    <div class="page-wrapper">
      <Header />
      <div class="page-body">
        <div class="container-xl">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>