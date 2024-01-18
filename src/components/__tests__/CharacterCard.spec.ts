/* eslint-disable import/no-extraneous-dependencies */
import CharacterCard from '@/components/CharacterCard.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import router from '../../router'
import { Character } from '../../types/response'

describe('CharacterCard.vue', () => {
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
  it('renders character card correctly with props', async () => {
    const wrapper = mount(CharacterCard, {
      global: {
        plugins: [router],
      },
      props: {
        character,
      },
    })
    expect(wrapper.findAll('img').length).toBe(1)
    expect(wrapper.findAll('p').length).toBe(1)
    expect(wrapper.findAll('h2').length).toBe(1)
  })
})
