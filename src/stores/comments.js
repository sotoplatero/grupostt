import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCommentsStore = defineStore('comments', () => {

  const comments = ref([])
  const loading = ref(false)
  const error = ref(null)

  async function postComment(comment) {

    this.loading = true

    const url = `${import.meta.env.VITE_URL_BACK}/character/${comment.character_id}/comments`

    try {

      const response = await fetch(url, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },        
        body: JSON.stringify(comment)
      })

      if ( response.ok ) {
        const data = await response.json()
        this.comments.push(data) 
      }

    } catch (error) {
      this.error = error
    } finally {
      this.loading = false
    }
  }

  async function getComments(character_id) {

    this.loading = true

    const url = `${import.meta.env.VITE_URL_BACK}/character/${character_id}/comments`

    try {

      const response = await fetch(url)
      if ( response.ok ) {
        const data = await response.json()
        this.comments = data
      }

    } catch (error) {
      this.error = error
    } finally {
      this.loading = false
    }    
  }

  return { 
    comments, 
    loading, 
    error,
    postComment,
    getComments, 
  }
})
