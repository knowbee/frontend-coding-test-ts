import { onBeforeMount, ref } from 'vue'
import { useToast } from 'vue-toastification'
import API_BASE_URL from '../config/config'
import { ApiResponse, Character } from '../types/response'

export const useCharacters = () => {
  const isLoading = ref(true)
  const error = ref(null)
  const characters = ref<Character[]>([])
  const toast = useToast()

  const fetchCharacters = async () => {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(API_BASE_URL)

      if (!response.ok) {
        throw new Error('Failed to fetch characters')
      }
      const data: ApiResponse = await response.json()
      characters.value = data.results
      toast.success('Characters loaded successfully!', {
        timeout: 1000,
        hideProgressBar: true,
      })
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      isLoading.value = false
    }
  }

  onBeforeMount(fetchCharacters)

  return {
    characters,
    isLoading,
    error,
  }
}

export default useCharacters
