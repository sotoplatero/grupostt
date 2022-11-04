<script setup>
	import Logo from '@/components/Logo.vue'
</script>

<template>

    <header>

    	<a href="/" class="brand">
	    	<Logo />
	    	<span >Rick and Morty</span>	
    	</a>

      <nav>
        <RouterLink to="/characters">
          Characters
	      </RouterLink>
      </nav>

    </header>	

</template>

<style scoped>
	header { @apply flex items-center justify-between mb-12 py-3}
	a.brand { @apply flex items-center text-base leading-tight sm:text-xl space-x-2 font-extrabold text-inherit }
	nav a { @apply border px-4 py-3 border-gray-600 font-bold }
</style>