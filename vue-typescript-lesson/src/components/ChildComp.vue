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

const [model, modifiers] = defineModel<string, 'trim' | 'uppercase'>({ required: true })
console.log(modifiers.uppercase)
//const model = defineModel({type: String, required: true})
</script>
<template>
  <h2>ChildComp</h2>
  <input v-model="model" type="text" />
  <p>model: {{ model }}</p>
  <p>title: {{ title }}</p>
</template>
