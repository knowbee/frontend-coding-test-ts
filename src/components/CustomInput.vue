<template>
  <form class="mx-4 mb-8">
    <div class="flex items-center space-x-2">
      <input v-model="computedValue" v-bind:placeholder="placeholder" v-bind:type="type" autocomplete="off"
        v-bind:class="`${customClasses} flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500`" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  customClasses: {
    type: String,
    default: '',
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object],
    default: '',
  },
})

const emit = defineEmits(['update:modelValue', 'setRef'])

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  },
})
</script>
