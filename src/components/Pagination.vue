<script setup>
	import {ref, computed} from 'vue'
	import { RouterLink, useRoute } from 'vue-router' 	
	import { storeToRefs } from 'pinia'
	import { useCharactersStore } from '@/stores/rickandmorty'
	import IconArrowRight from './icons/IconArrowRight.vue'
	import IconArrowLeft from './icons/IconArrowLeft.vue'

	const { 
		nextPage, 
		prevPage,
	} = storeToRefs(useCharactersStore())

	const route = useRoute()

</script>

<template>

	<nav v-if="prevPage || nextPage">

		<RouterLink 
			:to="`/characters/?${prevPage}`" 
			v-if="prevPage"
		>
			<IconArrowLeft />
		</RouterLink>
		<span v-else>
			<IconArrowLeft />
		</span>

		<RouterLink 
			:to="`/characters/?${nextPage}`"  
			v-if="nextPage"
		>
			<IconArrowRight />
		</RouterLink>
		<span v-else>
			<IconArrowRight />
		</span>

	</nav>
</template>

<style scoped>
	nav {
		@apply flex justify-center my-8 space-x-4 
	}
	nav > a {
		@apply border p-3 border-gray-700 text-inherit  transition-all duration-500 last:hover:translate-x-2 first:hover:-translate-x-2;
	}
	nav > span {
		@apply border p-3 border-gray-400 text-gray-400
	}
</style>