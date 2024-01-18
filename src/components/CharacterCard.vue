<template>
  <div class="relative overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer" data-testid="character">
    <RouterLink v-bind:to="`/character/${character.id}`">
      <img v-bind:src="character.image" v-bind:alt="character.name" class="object-cover w-full h-64" />
      <div class="p-4">
        <h2 class="mb-2 text-xl font-bold">{{ character.name }}</h2>
        <p class="text-gray-600">Origin: {{ character.origin.name }}</p>
        <span class="absolute px-2 py-1 text-white bg-green-500 rounded-full top-2 right-2">{{ character.status }}</span>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { Character } from '../types/response';

const props = defineProps({
  character: {
    type: Object as () => Character,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
</style>
