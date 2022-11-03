import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCharacterStore = defineStore('character', () => {

  const character = ref({})
  const loading = ref(false)
  const error = ref(null)

  async function getCharacter(id) {

    this.character = {}
    this.loading = true

    const url = `https://rickandmortyapi.com/api/character/${ id }`

    try {

      this.character = await fetch(url).then((res) => res.json())

    } 
    catch (error) { this.error = error } 
    finally { this.loading = false }
  }  

  return { character, getCharacter }  

})