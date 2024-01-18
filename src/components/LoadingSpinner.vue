<template>
  <div v-if="isLoading" class="flex items-center justify-center h-screen text-black">
    <div class="spinner"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #de9520;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}
</style>
