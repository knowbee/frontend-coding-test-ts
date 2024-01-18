/* eslint-disable import/no-extraneous-dependencies */
import Home from '@/views/Home.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import * as hooks from '../../composables/useCharacters'
import { Character } from '../../types/response'

describe('Home.vue', () => {
  const character: Character = {
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
  it('renders loading component while fetching characters', () => {
    vi.spyOn(hooks, 'useCharacters').mockReturnValue({
      characters: ref([]),
      error: ref(null),
      isLoading: ref(true),
    })

    const wrapper = mount(Home, {})

    expect(wrapper.findAll('img').length).toBe(0)
    expect(wrapper.findAll('p').length).toBe(0)
    expect(wrapper.findAll('h2').length).toBe(0)
    expect(wrapper.find('.spinner').exists()).toBe(true)
  })

  it('renders CharacterCard component after successfully fetching characters', () => {
    vi.spyOn(hooks, 'useCharacters').mockReturnValue({
      characters: ref([character]),
      error: ref(null),
      isLoading: ref(false),
    })

    const wrapper = mount(Home, {})

    expect(wrapper.findAll('img').length).toBe(1)
    expect(wrapper.findAll('p').length).toBe(1)
    expect(wrapper.findAll('h2').length).toBe(1)
    expect(wrapper.find('.spinner').exists()).toBe(false)
  })
})
