<script setup>
	import { watchEffect, computed } from 'vue'
	import { storeToRefs } from 'pinia'
	import { useCommentsStore } from '@/stores/comments'

	import Comment from '@/components/Comment.vue'
	import CommentForm from '@/components/CommentForm.vue'

	const { comments } = storeToRefs(useCommentsStore())
	const { getComments } = useCommentsStore()

	const props = defineProps(['character'])

	const counter = computed(() => comments.length )

	watchEffect(() => getComments(props.character.id))

</script>

<template>
	<section class="text-left space-y-4 mt-8">

		<div v-if="counter>1">
			{{counter}} Comments
		</div>

		<Comment 
			:comment="comment" 
			v-for="comment in comments"
		/>

		<CommentForm :character="character"/>
		
	</section>
</template>

