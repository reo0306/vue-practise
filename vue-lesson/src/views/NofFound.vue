<script setup lang="ts">
defineProps({
  catchAll: {
    type: Array,
    required: true,
  }
})
</script>

<template>
  <h2>NotFound</h2>
  <p>{{ catchAll }}</p>
</template>
