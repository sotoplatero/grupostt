<script setup>
	defineProps(['comment'])
</script>

<template>
	<div class="border border-gray-600 p-4">
		<div class="text-sm"><b>{{comment.author}}</b></div>
		<p>{{ comment.comment }}</p>
	</div>
</template>