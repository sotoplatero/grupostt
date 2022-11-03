import { storeToRefs } from "pinia";
import { useRickAndMortyStore } from "@/stores/rickandmorty";
import { useFetch } from '@/lib/useFetch'


export const getCharacters = ( page ) => {
	const url = `https://rickandmortyapi.com/api/character/?page=${ page ?? 1 }`
	const rickAndMorty = useRickAndMortyStore()

	try {

		const { data, error } = useFetch(url)
		rickAndMorty.characters = data.result
		rickAndMorty.info = data.info
		
	} catch () {
		console.log(error)
	}

}

export const getCharacter= ( id ) => {

	if (!id) return null

	const url = `https://rickandmortyapi.com/api/character/${ id }`

}