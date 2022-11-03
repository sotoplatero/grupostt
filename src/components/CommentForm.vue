<script setup>
	import { ref } from 'vue'
	import { useCommentsStore } from '@/stores/comments'

	const props = defineProps(['character'])

	const author = ref('')
	const comment = ref('')
	const { postComment } = useCommentsStore()

	function onSubmit() {

		const commentCharacter = { 
			character_id: props.character.id,
			character_name: props.character.name,
			author: author.value, 
			comment: comment.value
		}

		postComment(commentCharacter)

		author.value = ''
		comment.value = ''

	}
</script>

<template>
	<form class="" @submit.prevent="onSubmit" >
		<div class="py-2">Write your comment about <b>{{character.name}}</b></div>
		<div>
			<label>Nombre</label>
			<input type="text" v-model="author" placeholder="Type you name" name="name">
		</div>
		<div>
			<label>Comentario</label>
			<textarea v-model="comment" name="comment" class="h-40"></textarea>
		</div>
		<button type="submit" class="bg-gray-100">
			Comment
		</button>
	</form>
</template>

<style>
	form { @apply my-10 border border-gray-600 p-4 sm:p-8 space-y-4 }
</style>