<template>
  <div class="flex flex-col items-center justify-center mt-4">
    <LoadingSpinner v-bind:is-loading="isLoading" />
    <div v-if="character">
      <h2 class="mb-2 text-xl font-bold">{{ character.name }}</h2>
      <div class="flex flex-col items-start justify-start bg-white">
        <div class="p-4">
          <img v-bind:src="character.image" v-bind:alt="character.name" />
        </div>
        <div class="flex flex-col items-start justify-start mb-2 ml-4">
          <p class="pb-2 text-gray-600" data-testid="location">
            <span class="font-bold text-black">Location:</span>
            {{ character.location.name }}
          </p>
          <p class="pb-2 text-gray-600" data-testid="species">
            <span class="font-bold text-black">Species:</span>
            {{ character.species }}
          </p>
          <p class="pb-2 text-gray-600" data-testid="origin">
            <span class="font-bold text-black">Origin:</span>
            {{ character.origin.name }}
          </p>

          <p class="pb-2 text-gray-600" data-testid="type">
            <span class="font-bold text-black">Type:</span>
            {{ character.type }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoadingSpinner from '../components/LoadingSpinner.vue';
import { useCharacter } from '../composables/useCharacter';

const { character, isLoading } = useCharacter()
</script>
