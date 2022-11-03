<script setup>
	import { ref } from 'vue'
  import { useCharactersStore } from '@/stores/rickandmorty'
  import { storeToRefs } from 'pinia'

  const { 
    orderBy, 
  } = storeToRefs( useCharactersStore() )  

	const selectedOrder = ref('')
	const options = [ 'name', 'status', 'species']

</script>

<template>
	<div class="flex items-center border border-gray-600 px-2">

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
</svg>


		<select v-model="orderBy" class="capitalize font-bold border-0">
			<option 
				v-for="option in options" 
				:option="option" 
				:value="option"
			>
				{{option}}
			</option>
		</select>
	</div>
</template>
