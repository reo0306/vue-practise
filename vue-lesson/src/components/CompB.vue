<script setup lang="ts">
import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue';

onMounted(() => {
  console.log('CompB onMounted');
});
onUnmounted(() => {
  console.log('CompB onUnmounted');
});

// 表示
onActivated(() => {
  console.log("CompB onActivated");
});

// 消えるとき
onDeactivated(() => {
  console.log("CompB onDeactivated");
});
const count = ref(0);
</script>

<template>
  <h2>CompB</h2>
  <p>{{ count }}</p>
  <button @click="count++">+1</button>
</template>
