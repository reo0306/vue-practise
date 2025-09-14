<script setup lang="ts">
import { computed, onMounted, ref, useTemplateRef } from 'vue';
import ChildComp from '@/components/ChildComp.vue';

const count = ref(0)
const dobuleCount = computed<number>(() => {
  if (count.value > 3) return 100
  return count.value * 2
})
console.log(dobuleCount.value)

function countUp(event: MouseEvent) {
  count.value++
  console.log(event.clientX)
}

const userInput = useTemplateRef<HTMLElement>('user-input')
onMounted(() => {
  userInput.value?.focus()
})

//const courseTitle = ref('vue.js course')

const userInput2 = ref('')
</script>

<template>
  <h1>TypeScript</h1>
  <input ref="user-input" type="text" />
  <button @click="countUp">+1</button>
  <p>count:{{ count }}</p>
  <!-- <ChildComp :course="courseTitle"/>-->
  <ChildComp v-model="userInput" />
  <p>userInput2: {{ userInput2 }}</p>
</template>
