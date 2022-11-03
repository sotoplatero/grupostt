<script setup>
  import { watchEffect } from 'vue'
  import { useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useCharactersStore } from '@/stores/rickandmorty'

  import CharacterCard from '@/components/CharacterCard.vue'
  import Pagination from '@/components/Pagination.vue'
  import Search from '@/components/Search.vue'
  import Order from '@/components/Order.vue'
  import Spinner from '@/components/Spinner.vue'

  // const props = defineProps(['page'])

  const route = useRoute()

  const { 
    characters, 
    orderedCharacters,
    loading, 
    error 
  } = storeToRefs( useCharactersStore() )

  const { getCharacters } = useCharactersStore()

  
  watchEffect(() => getCharacters(route.query))

</script>

<template>
  <div class="flex justify-between py-4">
    <Search />
    <Order />
  </div>
  <div v-if="!loading">
    
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" v-if="!!characters.length">
      <CharacterCard 
        v-for="character in orderedCharacters" 
        :character="character" 
        :key="character.id"
      />
    </section> 
    <div v-else class="bg-yellow-100 border-2 border-yellow-500 text-yellow-700 p-8 text-center">
      There are no results change the search criteria or return to the list of characters
    </div>
    <Pagination/>

  </div>
  <div v-else class="py-20 ">
      <Spinner />
  </div>

</template>
