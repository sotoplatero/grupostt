<script setup lang="ts">
    import Logo from '@/components/Logo.vue'
    import { RouterLink } from 'vue-router'      
</script>

<template>
  <main class="h-full grow flex items-center justify-center">
    <div class="text-center">

      <h1>Prueba Técnica</h1>
      <p>Damián Soto Platero</p>

      <ul class="mt-4">
        <li><a href="https://grupostt.vercel.app" target="_blank">FRONT deploy serverless (Vercel)</a></li>
        <li><a href="https://grupostt-back.vercel.app" target="_blank">BACK deploy serverless (Vercel)</a></li>
        <li><a href="https://github.com/sotoplatero/grupostt" target="_blank">Repositorio Front</a></li>
        <li><a href="https://github.com/sotoplatero/grupostt-back" target="_blank">Repositorio Back</a></li>
      </ul>

      <p class="my-2">Nota: Back con <a href="https://nitro.unjs.io/" target="_blank">nitro</a> y base de datos el servicio <a href="https://deta.sh" target="_blank">Deta</a> </p>

      <RouterLink to="/characters" class="cta">
        Comenzar &raquo
      </RouterLink>

    </div>
  </main>
</template>

<style scoped>
  h1{ @apply text-2xl font-bold}
  a.cta{ @apply text-lg block bg-lime-600 text-white p-3 font-bold mt-6 border-lime-700 hover:bg-lime-700 }
</style>
