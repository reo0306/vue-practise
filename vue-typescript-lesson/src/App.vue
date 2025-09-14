<script setup lang="ts">
import { computed, onMounted, ref, useTemplateRef } from 'vue';

const count = ref(0)
const dobuleCount = computed<number>(() => {
  if (count.value > 3) return 100
  return count.value * 2
})

const userInput = useTemplateRef<HTMLElement>('user-input')
onMounted(() => {
  userInput.value?.focus()
})
</script>

<template>
  <h1>TypeScript</h1>
  <input ref="user-input" type="text" />
</template>
