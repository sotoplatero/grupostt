<script setup>
  import { RouterLink } from 'vue-router' 

  const props = defineProps(['character'])

</script>

<template>
    <dl>
      <div>
        <dt>Status</dt>
        <dd>
          <RouterLink :to="`/characters/?status=${character.status}`">
            {{character.status}}
          </RouterLink>
        </dd>
      </div>
      <div>
        <dt>Species</dt>
        <dd>
          <RouterLink :to="`/characters/?species=${character.species}`">
            {{character.species}}
          </RouterLink>
        </dd>
      </div>
      <div>
        <dt>Gender</dt>
        <dd>{{character.gender}}</dd>
      </div>
      <div v-if="character.location">
        <dt>Location</dt>
        <dd>{{character.location.name}}</dd>
      </div>
    </dl>  
    <div class="mt-2">
      <div>Episodes</div>
      <div class="px-2 sm:px-20">
          {{ character.episode?.map(e=>e.match(/\d+$/)[0]).join(', ') }}
      </div>
    </div>
</template>

<style scoped>
  dl { @apply text-gray-500 }
  dt { @apply text-right capitalize; }
  dd { @apply text-left text-gray-900 capitalize; }
  dl > div{ @apply grid grid-cols-2 gap-2; }

</style>