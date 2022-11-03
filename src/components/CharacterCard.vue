<script setup>
  import { computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import { RouterLink } from 'vue-router'  
  import { useCharactersStore } from '@/stores/rickandmorty'  

  import Details from '@/components/Details.vue'  
  import CharacterImage from '@/components/CharacterImage.vue'  
  import CommentsCount from '@/components/CommentsCount.vue'  

  const { commentsCount } = storeToRefs( useCharactersStore() )

  defineProps(['character'])
</script>

<template>
  <RouterLink :to="`/character/${character.id}`" class="card">

    <CharacterImage  :character="character" />

    <div class="p-3 text-center">

      <h3 class="font-bold text-center ">
        <span>{{ character.name }}</span>
        <CommentsCount :count="commentsCount[character.id]" class="ml-2"/>
      </h3>

      <div class="text-sm ">
        <div >

          <span 
            class="mr-2" v-if="character.status != 'unknown'">
            {{character.status}}
          </span>
          <span class="mr-2" v-if="character.species != 'unknown'">
            {{character.species}}
          </span>
          <span class="mr-2" v-if="character.species != 'unknown'">
            {{character.gender}}
          </span>
          
        </div>

        <div class="">
          {{character.location.name}}
        </div>

      </div>

    </div>
  </RouterLink>
</template>

<style scoped>
  .card{
    @apply border border-gray-700 transition  hover:rotate-2 text-inherit hover:no-underline;
  }
  img{
    @apply border-b border-gray-700
  }
  /*.badge { @apply bg-yellow-100 border-yellow-600 text-yellow-600 text-sm px-2 ml-2 }*/
</style>