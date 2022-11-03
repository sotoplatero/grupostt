<script setup >
  import { useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useCharacterStore } from '@/stores/character'

  import Comments from '@/components/Comments.vue'
  import Details from '@/components/Details.vue'
  import CharacterImage from '@/components/CharacterImage.vue'

  const { character, loading, error } = storeToRefs(useCharacterStore())
  const { getCharacter } = useCharacterStore ()
  const route = useRoute() 

  getCharacter(route.params.id)

</script>

<template>
  <section class="card">

    <CharacterImage :character="character" class="w-1/2 mx-auto border border-gray-700"/>

    <h1>{{character.name}}</h1>

    <Details :character="character"/>
    
    <Comments :character="character"/>

  </section>
</template>

<style scoped>
  .card{
    @apply w-full max-w-screen-sm mx-auto text-center text-lg;
  }
  img {
    @apply border border-gray-700 mx-auto;
  }
  h1{
    @apply text-2xl font-bold mb-2 mt-4;
  }

</style>