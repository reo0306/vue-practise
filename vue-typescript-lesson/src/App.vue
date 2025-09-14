<script setup lang="ts">
import { ref } from 'vue';

const count = ref<number | string>(0)
count.value = 'hello'
</script>

<template>
  <h1>TypeScript</h1>
</template>
