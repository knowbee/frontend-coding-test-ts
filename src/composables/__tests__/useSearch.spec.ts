/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { Character } from '../../types/response'
import { useSearch } from '../useSearch'

describe('useSearch', () => {
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
  it('should return default value of searchTerm and original items', () => {
    const items = ref([character])

    const { searchQuery, filteredCharacters } = useSearch(items)

    expect(searchQuery.value).toBe('')
    expect(filteredCharacters.value).toEqual(items.value)
  })

  it('should change searchTerm and return filtered items', () => {
    const items = ref([character])

    const { searchQuery, filteredCharacters, changesearchQuery } =
      useSearch(items)

    changesearchQuery('Rick')

    expect(searchQuery.value).toBe('Rick')
    expect(filteredCharacters.value).toEqual(items.value)
  })
  it('should return empty list when no match is found', () => {
    const items = ref([character])

    const { searchQuery, filteredCharacters, changesearchQuery } =
      useSearch(items)

    changesearchQuery('Ricky')

    expect(searchQuery.value).toBe('Ricky')
    expect(filteredCharacters.value).toEqual([])
  })
})
