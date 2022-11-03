<script setup>
	import { useRouter, useRoute } from 'vue-router'
	import { ref, watchEffect } from 'vue'

	const router = useRouter()
	const route = useRoute()
	const q = ref(route.query.name)

	const onSubmit = () => {
		router.push({ path: '/characters', query: { name: q.value }  })
	}	

</script>

<template>
	<form @submit.prevent="onSubmit" class="flex space-x-2">
		<div class="w-60">
			<input v-model="q" placeholder="Search Character">
		</div>
		<button class="primary w-auto">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
			</svg>
		</button>
	</form>
</template>

