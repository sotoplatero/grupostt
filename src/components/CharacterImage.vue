<script setup>
	defineProps(['character'])
</script>

<template>
    <div :class="`aspect-square overflow-hidden w-full`">
        <img 
      		loading="lazy"
			class="w-full aspect-square object-cover" 
			:src="character.image" 
			:alt="character.name">
    </div>
</template>