import { ref, isRef, unref, watchEffect } from 'vue'

export function useFetch(url) {
  const data = ref({})
  const error = ref('')

  async function doFetch() {

    // reset state before fetching..
    data.value = {}
    error.value = ''    
    const urlValue = unref(url)
    
    try {
    	const res = await fetch(urlValue)
	    data.value = await res.json()
    } catch (e) {
      error.value = e
    }
  }

  if (isRef(url)) {

    // setup reactive re-fetch if input URL is a ref
    watchEffect(doFetch)

  } else {

    // otherwise, just fetch once
    doFetch()

  }

  return { data, error, retry: doFetch }
}

