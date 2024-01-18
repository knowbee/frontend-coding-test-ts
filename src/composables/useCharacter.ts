import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'
import API_BASE_URL from '../config/config'
import { Character } from '../types/response'

export const useCharacter = () => {
  const isLoading = ref(true)
  const error = ref(null)
  const route = useRoute()
  const character = ref<Character>()
  const toast = useToast()

  const fetchCharacter = async () => {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(`${API_BASE_URL}/${route.params.id}`)

      if (!response.ok) {
        throw new Error('Failed to fetch characters')
      }
      const data: Character = await response.json()
      character.value = data
      toast.success('Character loaded successfully!', {
        timeout: 1000,
        hideProgressBar: true,
      })
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      isLoading.value = false
    }
  }

  onBeforeMount(fetchCharacter)

  return {
    character,
    isLoading,
    error,
  }
}

export default useCharacter
