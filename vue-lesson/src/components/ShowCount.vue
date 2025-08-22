<script setup lang="ts">
import { watchEffect } from 'vue';

const { foo } = defineProps(['foo']);
watchEffect(() => {
  console.log(foo);
});
</script>

<template>
  <p>count:{{ foo }}</p>
  <p>{{ $attrs }}</p>
</template>
