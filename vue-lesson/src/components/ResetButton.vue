<script setup lang="ts">
// 必須
const emit = defineEmits(['resetCount']);
function emitReset() {
  emit('resetCount', 100);
}
</script>

<template>
  <button @click="emitReset">Reset</button>
</template>
