<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route.params.id);
watch(
  () => route.params.id,
  () => {
    console.log('watch')
  }
)
onMounted(() => {
  console.log('onMounted');
})
onUnmounted(() => {
  console.log('onUnmounted')
})
</script>

<template>
  <div>
    <h2 id="blog">Blog</h2>
    <p>Blog(id: {{ $route.params.id }})</p>
    <p>ver: {{ $route.params.version }}</p>
    <RouterLink :to="{ name: 'blog', params: { id: Number($route.params.id) + 1, version: $route.params.version }, hash: 'blog'}">Next</RouterLink>
  </div>
</template>
