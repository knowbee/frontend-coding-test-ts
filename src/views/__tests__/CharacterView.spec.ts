/* eslint-disable import/no-extraneous-dependencies */
import CharacterDetails from '@/views/CharacterDetails.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import * as hooks from '../../composables/useCharacter'
import { Character } from '../../types/response'

describe('CharacterDetails.vue', () => {
  const mock: Character = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [],
    url: '',
  }
  it('renders loading component while fetching a character', () => {
    vi.spyOn(hooks, 'useCharacter').mockReturnValue({
      character: ref(),
      error: ref(null),
      isLoading: ref(true),
    })

    const wrapper = mount(CharacterDetails, {})

    expect(wrapper.findAll('img').length).toBe(0)
    expect(wrapper.findAll('p').length).toBe(0)
    expect(wrapper.findAll('h2').length).toBe(0)
    expect(wrapper.find('.spinner').exists()).toBe(true)
  })

  it('renders character details after successfully fetching characters', () => {
    vi.spyOn(hooks, 'useCharacter').mockReturnValue({
      character: ref(mock),
      error: ref(null),
      isLoading: ref(false),
    })

    const wrapper = mount(CharacterDetails, {})
    const location = wrapper.find('[data-testid="location"]').element
      .textContent
    const species = wrapper.find('[data-testid="species"]').element.textContent
    const origin = wrapper.find('[data-testid="origin"]').element.textContent
    const type = wrapper.find('[data-testid="type"]').element.textContent

    expect(location).toBe('Location: Citadel of Ricks')
    expect(species).toBe('Species: Human')
    expect(origin).toBe('Origin: Earth (C-137)')
    expect(type).toBe('Type: ')
    expect(wrapper.find('.spinner').exists()).toBe(false)
  })
})
