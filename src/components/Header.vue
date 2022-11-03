<script setup>
	import Logo from '@/components/Logo.vue'
</script>
<template>
    <header class="flex items-center justify-between mb-12 py-3">
    	<a href="/" class="flex items-center text-xl space-x-2 font-extrabold text-inherit">
	    	<Logo />
	    	<span>Rick and Morty</span>	
    	</a>

        <nav>
          <RouterLink to="/characters" class="border px-4 py-3 border-gray-600">
	          <b>Characters</b>
	      </RouterLink>
        </nav>
    </header>	
</template>

<style scoped>
	nav, header {
		@apply flex
	}
</style>