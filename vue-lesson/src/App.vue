<script setup lang="ts">
import { ref, reactive } from 'vue';

const title = ref('Vue.js Course');
let price = ref(9.99); // リアクティビティ（リアクティブ）
function increment() {
  price.value += 1;
  instructor.age += 1;
}
const info = ref({
  students: 1000,
  rating: 4,
});

// オブジェクトのリアクティブ
const instructor = reactive({
  name: 'test' ,
  age: 25,
});
console.log(instructor.age);
</script>

<template>
  <h1>Title: {{ title }}</h1>
  <h2>Price: ${{ price - 1 }}</h2>
  <button @click="increment">button</button>
  <h2>Students: {{ info.students }}</h2>
  <h2>Instructor age: {{ instructor.age }}</h2>
</template>
