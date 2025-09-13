<script setup lang="ts">
function add(a: number, b: number) {
  return a + b
}
</script>

<template>
  <h1>TypeScript</h1>
  <button @click="add(3, 5)">add</button>
</template>
