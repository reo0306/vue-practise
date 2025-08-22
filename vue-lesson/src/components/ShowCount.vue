<script setup lang="ts">
import { watchEffect } from 'vue';

const { foo } = defineProps({
  foo: {
    type: Number,
    default: 100
  },
});
watchEffect(() => {
  console.log(foo);
});
</script>

<template>
  <p>count:{{ foo }}</p>
  <p>{{ $attrs }}</p>
</template>
