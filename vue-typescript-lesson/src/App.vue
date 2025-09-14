<script setup lang="ts">
import { computed, ref } from 'vue';

const count = ref(0)
const dobuleCount = computed<number>(() => {
  if (count.value > 3) return 100
  return count.value * 2
})
dobuleCount.value
</script>

<template>
  <h1>TypeScript</h1>
</template>
