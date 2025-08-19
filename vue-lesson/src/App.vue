<script setup lang="ts">
import { ref, reactive, computed } from 'vue';

const title = ref('Vue.js Course');
let price = ref(9.99); // リアクティビティ（リアクティブ）
function increment() {
  price.value += 1;
  instructor.age += 1;
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
//instructor.bio = 'hello';
// 配列のリアクティブは.valueが必要
const item = reactive([ref(1),ref(2),ref(3),]);
item.reverse();
const courseInfo = {
  sections: ref(10),
  language: ref('Japanese'),
};
console.log(courseInfo.sections.value);
const sections = courseInfo.sections;

const count = ref(2);
const count2 = ref(4);

const message = ref('<h1>Hello</h1>')

const vueURL = ref("https://vuejs.org");
const vueID = ref("vue-link");
const count3 = ref(0);

function countUp(event, times) {
  count3.value = event.clientX * times;
}
const eventName = 'keyup';

const userInput = ref('');

const score = ref(0);
const evaluation = computed(() => {
  console.log('computed');
  return score.value > 3 ? 'Good' : 'Bad'
});
console.log(evaluation.value);
</script>

<template>
  <div>{{ count + count2 }}</div>
  <div>{{ count > 3 ? 'Yes' : 'No' }}</div>
  <div>{{ count }}</div>
  <div v-text="count"></div>
  <div v-html="message"></div>
  <a v-bind="{id: vueID, href: vueURL}">Vue.js</a>
  <p>{{ count3 }}</p>
  <button @click="count3 = $event.clientX">button</button>
  <button @click="countUp($event, 5)">button</button>

  <p>{{ count3 }}</p>
  <div @click="count3++">
    <button @click.stop="count = 30">button</button>
  </div>
  <a @click.prevent href="https://vuejs.org">Vue.js</a>

  <p>{{ count3 }}</p>
  <input type="text" @[eventName].space.delete="count3++" />

  <p>{{ userInput }}</p>
  <input v-model="userInput" type="text" />
  <button @click="userInput = 'hi'">button</button>

  <p>{{ score > 3 ? 'Good' : 'Bad' }}</p>
  <p>{{ evaluation }}</p>
  <p>{{ score }}</p>
  <button @click="score++">+1</button>

  <h1>Title: {{ title }}</h1>
  <h2>Price: ${{ price - 1 }}</h2>
  <button @click="increment">button</button>
  <h2>Students: {{ info.students }}</h2>
  <h2>Instructor age: {{ instructor.age }}</h2>
  <h2>Instructor bio: {{ instructor.bio }}</h2>
  <h2>Instructor SNS Twitter: {{ instructor.sns.twitter }}</h2>
  <h2>Instructor email: {{ instructor.email }}</h2>
  <h2>Course Info Sections: {{ sections + 1 }}</h2>
</template>
