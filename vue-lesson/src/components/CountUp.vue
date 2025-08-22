<script setup lang="ts">
import { ref } from 'vue';

console.log('script');

const count = ref(0);
</script>

<template>
  <h2 v-bind="$attrs">CountUp</h2>
  <BaseIcon />
  <p>count:{{ count }}</p>
  <button @click="count++">+1</button>
</template>
