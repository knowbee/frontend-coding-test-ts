<template>
  <div class="container mx-auto mt-10">
    <LoadingSpinner v-bind:is-loading="isLoading" />

    <div v-if="!isLoading" class="mb-4">
      <CustomInput v-model="searchQuery" placeholder="Search for a character" />

      <LayoutCharacters>
        <div v-for="character in filteredCharacters" v-bind:key="character.id">
          <CharacterCard v-bind:character="character" />
        </div>
      </LayoutCharacters>
    </div>
  </div>
</template>

<script setup lang="ts">
import CharacterCard from '../components/CharacterCard.vue'
import CustomInput from '../components/CustomInput.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'

import LayoutCharacters from '../components/layout/LayoutCharacters.vue'
import { useCharacters } from '../composables/useCharacters'
import { useSearch } from '../composables/useSearch'

const { characters, isLoading } = useCharacters()
const { searchQuery, filteredCharacters } = useSearch(characters)
</script>
