<script setup lang="ts">
    import Logo from '@/components/Logo.vue'
</script>

<template>
  <main class="h-full grow flex items-center justify-center">
    <div class="text-center">
      <h1>Prueba Técnica</h1>
      <p>Damián Soto Platero</p>
      <ul class="mt-4">
        <li><a href="https://grupostt.vercel.app">Servicio desplegado serverless (Vercel)</a></li>
        <li><a href="https://grupostt.vercel.app">Servicio desplegado Docker</a></li>
        <li><a href="https://grupostt.vercel.app">Repositorio Front</a></li>
        <li><a href="https://grupostt.vercel.app">Repositorio Back</a></li>
      </ul>
      <a href="/characters" class="cta">
        Comenzar
      </a >
    </div>
  </main>
</template>

<style scoped>
  h1{ @apply text-2xl font-bold}
  a.cta{ @apply block bg-lime-600 text-white p-3 font-bold mt-6 border-lime-700 hover:bg-lime-700 }
</style>
