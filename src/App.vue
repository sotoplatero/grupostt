<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="w-full max-w-screen-lg mx-auto min-h-screen">
    <div class="mx-2">
      <Header />
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>
