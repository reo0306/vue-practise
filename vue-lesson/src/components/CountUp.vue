<script setup lang="ts">
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';

const count = ref(0);
onBeforeMount(() => {
  console.log('onBeforeMounted');
})
onMounted(() => {
  console.log('onMounted');
});
onBeforeUpdate(() => {
  console.log('onBeforeUpdated');
})
onUnmounted(() => {
  console.log('onUnmounted');
})
onBeforeUnmount(() => {
  console.log('onBeforeUmount');
})
onUpdated(() => {
  console.log('onUpdated');
})
</script>

<template>
  <h2 v-bind="$attrs">CountUp</h2>
  <BaseIcon />
  <p class="red">count:{{ count }}</p>
  <button @click="count++">+1</button>
</template>

<style scoped>
.red {
  color: red;
}
</style>

