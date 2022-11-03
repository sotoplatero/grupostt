<script setup>
	import IconCheck from './icons/IconCheck.vue'

	defineProps(['status'])

	const color = {
		'Alive': 'text-green-600' ,
	  	'Dead': 'text-red-600'
	}[status] || 'text-gray-500'

</script>

<template>
	<IconCheck/>
	<span>{{status}}</span>
</template>