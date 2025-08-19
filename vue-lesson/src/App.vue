<script setup lang="ts">
import { ref, reactive } from 'vue';

const title = ref('Vue.js Course');
let price = ref(9.99); // リアクティビティ（リアクティブ）
function increment() {
  price.value += 1;
  instructor.age += 1;
  instructor.bio = 'h1';
  instructor.sns.twitter = 'hello';
  instructor.email = ref('bbbb@exmaple.com');
}
const info = ref({
  students: 1000,
  rating: 4,
});

// オブジェクトのリアクティブ
const instructor = reactive({
  name: 'test' ,
  age: 25,
  sns: {
    twitter: '@yoshi',
    youtube: '@yoshi2',
  },
  email: ref('aaaa@example.com'),
});
instructor.bio = 'hello';
// 配列のリアクティブは.valueが必要
const item = reactive([ref(1),ref(2),ref(3),]);
item.reverse();
const courseInfo = {
  sections: ref(10),
  language: ref('Japanese'),
};
console.log(courseInfo.sections.value);
</script>

<template>
  <h1>Title: {{ title }}</h1>
  <h2>Price: ${{ price - 1 }}</h2>
  <button @click="increment">button</button>
  <h2>Students: {{ info.students }}</h2>
  <h2>Instructor age: {{ instructor.age }}</h2>
  <h2>Instructor bio: {{ instructor.bio }}</h2>
  <h2>Instructor SNS Twitter: {{ instructor.sns.twitter }}</h2>
  <h2>Instructor email: {{ instructor.email }}</h2>
  <h2>Course Info Sections: {{ courseInfo.sections.value }}</h2>
</template>
