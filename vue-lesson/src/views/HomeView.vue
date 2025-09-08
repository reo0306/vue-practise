<script setup lang="ts">
</script>

<template>
  <h2>Home</h2>
  <h3>Blog</h3>
  <RouterLink :to="{ name: 'blog', params: { id: 3, version: 'foo' } }">New Release!</RouterLink> |
  <RouterLink :to="{ name: 'profile', params: { id: 'yoshipi' } }">Profile</RouterLink>
</template>
