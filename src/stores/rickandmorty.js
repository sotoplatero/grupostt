import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCharactersStore = defineStore('characters', () => {

  const characters = ref([])
  const commentsCount = ref([])
  const character = ref({})
  const info = ref({})
  const orderBy = ref('name')
  const loading = ref(false)
  const error = ref(null)

  // "https://rickandmortyapi.com/api/character?page=2"
  const nextPage = computed( () => {
    return !!info.value.next ? info.value.next.split('?')[1] : null
  })

  const prevPage = computed( () => {
    return !!info.value.prev ? info.value.prev.split('?')[1] : null
  })

  // Array or characters ordered to display in FOR 
  const orderedCharacters = computed( () => {
    const field = orderBy.value ?? 'name'

    return characters.value.sort((a, b) => {

      const nameA = a[ field ].toUpperCase(); 
      const nameB = b[ field ].toUpperCase(); 

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;

    })

  })

  async function getCharacters(query) {

    this.characters = []
    this.loading = true

    const searchParams = new URLSearchParams(query);
    const queryString = searchParams.toString()

    const url = `https://rickandmortyapi.com/api/character/?${ queryString }`

    try {

      const response = await fetch(url)
      if ( response.ok ) {
        const data = await response.json()
        this.characters = data.results
        this.info = data.info 
      }

    // Call the endpoint for comments counter
    const ids = characters.value.map( ch => [ 'ids', ch.id ] )
    const searchParamsIds = new URLSearchParams(ids);

    const urlCommentsCount = `${import.meta.env.VITE_URL_BACK}/comments/counter/?${ searchParamsIds.toString() }`
    fetch(urlCommentsCount)
      .then( res => res.json() )
      .then( data => this.commentsCount = data )


    } catch (error) {
      this.error = error
    } finally {
      this.loading = false
    }
  }

  return { 
    characters, 
    commentsCount,
    info, 
    loading, 
    error,
    orderBy,
    orderedCharacters,
    getCharacters, 
    nextPage, 
    prevPage 
  }
})
