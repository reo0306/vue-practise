<script setup lang="ts">
// ts ver
interface Course {
  title?: string
}
const { title = 'default course' } = defineProps<Course>()

// js ver
/*defineProps({
  title: {
    type: String,
    required: false
    default: 'default course'
  }
})*/
</script>
<template>
  <h2>ChildComp</h2>
  <p>title: {{ title }}</p>
</template>
