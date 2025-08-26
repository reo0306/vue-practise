<script setup lang="ts">
import CountUp from '@/components/CountUp.vue';
import BaseButton from '@/components/BaseButton.vue';
import ShowCount from '@/components/ShowCount.vue';
import ResetButton from '@/components/ResetButton.vue';
import BaseCard from '@/components/BaseCard.vue';
import CompA from '@/components/CompA.vue';
import CompB from '@/components/CompB.vue';
import CompC from '@/components/CompC.vue';
import { ref, reactive, computed, watchEffect, watch, useTemplateRef, onMounted, shallowRef } from 'vue';

const title = ref('Vue.js Course');
const price = ref(9.99); // リアクティビティ（リアクティブ）
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

function tmp() {
  return score.value > 3 ? 'Good' : 'Bad';
}
const evaluation = computed(() => {
  console.log('computed');
  return tmp();
});
console.log(evaluation.value);

const count4 = ref(0);
const count5 = ref(0);
const count6 = ref({
  a:0
});
//watchEffect(() => {
  //console.log('watchEffect');
  //setTimeout(() => {
    //console.log('after 1 secound');
  //}, 1000)
  //console.log(count4.value);
  //count4.value = 'hello';
//});

// 監視対象を明示するとき（第一引数にリアクティブを渡す）
// 第一引数を関数にすることで、watchEffectと同じことができる
// newValueとoldValueが同じだと、実行されない。
// 第一引数に配列を指定することで、複数監視できる
watch(() => {
  console.log('watch first argument');
  return count6.value.a;
}, (newValue, oldValue) => {
  console.log('watch');
  console.log('newValue', newValue);
  console.log('oldValue', oldValue);
},
{
  immediate: true // 読み込時に実行設定
}
);

// 関数内のリアクティブ全部を監視したいとき
watchEffect(() => {
  console.log('watchEffect');
  console.log(count4.value, count5.value, count6.value);
})

const isRed = ref(true);
const isBlue = ref(true);
const className = ref('red');
function toggleClass() {
  isRed.value = !isRed.value;
  isBlue.value = !isBlue.value;
}

const ok = ref(true);
const maybeOk = ref(false);
const fruits = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Apple' },
  { id: 3, name: 'Banana' },
  { id: 4, name: 'Grape' },
]);

const user = ref({
  name: 'Yoshipi',
  age: 25,
  gender: 'man',
});

function onReset(value) {
  count2.value = value;
}

const userInput1 = useTemplateRef('user-input');
console.log(userInput.value);
onMounted(() => {
  userInput1.value
});

const currentComp = shallowRef(CompA);
console.log(CompA);
</script>

<template>
  <!-- Dynamic Components -->
  <h1>Dynamic Components</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  <component :is="currentComp"/>

  <!-- Propsとは違う方法（タグごと渡す） -->
  <h1>Slots</h1>
  <BaseCard>
    <template #header="{ pageCount }">
      <h2 v-if="pageCount == 1">Vue.js Course</h2>
      <h2 v-if="pageCount == 2">HTML Course</h2>
      <h2 v-if="pageCount == 3">CSSCourse</h2>
    </template>
    <template #default="{ pageCount}">
      <p v-if="pageCount == 1">This is a Vue.js Course</p>
      <p v-if="pageCount == 2">This is a HTML Course</p>
      <p v-if="pageCount == 3">This is a CSS Course</p>
    </template>
    <template #footer>
      <p>Instructor: aaaa</p>
    </template>
  </BaseCard>
  <br>
  <input ref="user-input" type="text" />

  <!-- emit(child → parsent) ケバブケースを使うこと -->
  <p>{{ count2 }}</p>
  <button @click="count2++">+1</button>
  <ResetButton @reset-count="onReset"/>

  <!-- Props ケバブケースで書くこと -->
  <ShowCount :total-score="count" bar="hello" />
  <button @click="count++">+1</button>

  <h2 class="red">App</h2>
  <BaseIcon />
  <CountUp id="base-button" class="border" />
  <BaseButton id="base-button" class="border" @click="console.log('App.vue')"/>
  <!-- v-for number -->
  <p v-for="n in 10" :key="n">{{ n }}</p>

  <!-- v-for object -->
  <p v-for="(value, key, index) in user" :key="value">{{ key }}: {{ value }}({{ index }})</p>

  <!-- v-for -->
  <button @click="fruits.shift()">button</button>
  <template v-for="({id, name}, index) in fruits" :key="id">
    <template v-if="id === 2">
      <p>id: {{ id }}</p>
      <input type="text" />{{ name }}({{ index }})
    </template>
  </template>

  <!-- v-if, v-else-if v-else -->
  <button @click="ok = !ok">toggle</button>
  <!-- v-ifといっしょに使うとtemplateタグは消える -->
  <template v-if="ok">
    <p>OK!</p>
    <p>Hello</p>
    <p>Hi</p>
  </template>
  <!-- v-show display:noneで消してる。処理が早い。高頻度で変わる場合。templateでは動かない。elseもない -->
  <p v-show="ok">OK!</p>

  <p v-if="ok">OK!</p>
  <p v-else-if="maybeOk">maybe OK!</p>
  <p v-else>not OK...</p>

  <div>{{ count + count2 }}</div>
  <div>{{ count > 3 ? 'Yes' : 'No' }}</div>
  <div>{{ count }}</div>
  <div v-text="count"></div>
  <div v-html="message"></div>
  <a v-bind="{id: vueID, href: vueURL}">Vue.js</a>
  <p>{{ count3 }}</p>
  <button @click="count3 = $event.clientX">button</button>
  <button @click="countUp($event, 5)">button</button>

  <!-- click -->
  <p>{{ count3 }}</p>
  <div @click="count3++">
    <button @click.stop="count = 30">button</button>
  </div>
  <a @click.prevent href="https://vuejs.org">Vue.js</a>

  <!-- event -->
  <p>{{ count3 }}</p>
  <input type="text" @[eventName].space.delete="count3++" />

  <!-- v-model -->
  <p>{{ userInput }}</p>
  <input v-model="userInput" type="text" />
  <button @click="userInput = 'hi'">button</button>

  <!-- computed -->
  <p>{{ score > 3 ? 'Good' : 'Bad' }}</p>
  <p>{{ evaluation }}</p>
  <p>{{ tmp() }}</p>
  <p>{{ score }}</p>
  <button @click="score++">computed +1</button>

  <p>{{ count4 }}</p>
  <p>{{ count5 }}</p>
  <p>{{ count6 }}</p>
  <button @click="count4++">watch count4 +1</button>
  <button @click="count5++">watch count5 +1</button>
  <button @click="count6++">watch count6 +1</button>

  <!-- v-bind class -->
  <div class="border" :class="[className, {'bg-blue': isBlue }]">Hello</div>
  <button @click="toggleClass">toggle</button>

  <!-- v-bind style -->
  <div :style="{color: 'red', backgroundColor: 'blue'}">Hello2</div>

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

<style scoped>
.red {
  color: red;
}
.bg-blue {
  background-color: blue;
}
.border {
  border: 1px solid red;
}
</style>
