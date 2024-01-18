import { Ref, computed, ref } from 'vue'
import { Character } from '../types/response'

export const useSearch = (characters: Ref) => {
  const searchQuery = ref('')

  const filteredCharacters = computed(() => {
    const filteredItems = computed(() => {
      return characters.value.filter((item: Character) => {
        return item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      })
    })
    return filteredItems.value
  })
  return {
    searchQuery,
    filteredCharacters,
    changesearchQuery: (term: string) => {
      searchQuery.value = term
    },
  }
}
export default useSearch
