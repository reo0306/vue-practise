<script setup lang="ts">
import CountUp from '@/components/CountUp.vue';
import BaseButton from '@/components/BaseButton.vue';
import ShowCount from '@/components/ShowCount.vue';
import ResetButton from '@/components/ResetButton.vue';
import BaseCard from '@/components/BaseCard.vue';
import CompA from '@/components/CompA.vue';
//import CompB from '@/components/CompB.vue';
import CompC from '@/components/CompC.vue';
import BaseLoder from '@/components/BaseLoder.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';
import CustomInput from '@/components/CustomInput.vue';
//import { refHistory } from '@/composables/refHistory';
import { useRefLimitedHistory } from '@/composables/refLimitedHistory';

import { ref, reactive, computed, watchEffect, watch, useTemplateRef, onMounted, shallowRef, defineAsyncComponent } from 'vue';
import { RouterView } from 'vue-router';

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

const isShow = ref(false);

//const CompB = defineAsyncComponent(() => import('@/components/CompB.vue'));
const CompB = defineAsyncComponent({
  loader: () => import('@/components/CompB.vue'),
  loadingComponent: BaseLoder,
  delay: 200,
  errorComponent: ErrorMessage,
  timeout: 2000,
});

const checked = ref('not checked');
const fruits2 = ref([]);
const gender = ref('male');
const selected = ref([]);
const userInput2 = ref();
const titleInput = ref('title');

const countCon = ref(0);

const {history, undo} = useRefLimitedHistory(countCon, ref(3));
const userInputCon = ref('');
const { history: history2, undo: undo2} = useRefLimitedHistory(userInputCon, 6);

const isShow2 = ref(true);
const isShow3 = ref(true);
function beforeEnter(el) {
  console.log('befor enter', el);
  el.style.transform = 'translateX(30px)';
}
let intervalId;
function enter(el, done) {
  console.log('enter', el);
  let translateXValue = 30
  const intervalId = setInterval(() => {
    translateXValue -= 1;
    el.style.transform = `translateX(${translateXValue})px)`
    if (translateXValue === 0) {
      clearInterval(intervalId)
      done()
    }
  }, 20)
}
function afterEnter(el) {
  console.log('after enter', el);
}
function enterCancelled(el) {
  console.log('enter cancelled', el);
  clearInterval(intervalId)
}
function beforeLeave(el) {
  console.log('before leave', el);
}
function leave(el, done) {
  console.log('leave', el);
  let translateXValue = 0
  const intervalId = setInterval(() => {
    translateXValue += 1;
    el.style.transform = `translateX(${translateXValue})px)`
    if (translateXValue === 30) {
      clearInterval(intervalId)
      done()
    }
  }, 20)
}
function afterLeave() {
  console.log('after leave', el);
}
function leaveCancelled(el) {
  console.log('leave cancelled', el);
  clearInterval(intervalId)
}
const fruits3 = ref(['Apple', 'Banana', 'Grape']);
const newFruit = ref('');
</script>

<template>
  <h1>Vue Router</h1>
  <RouterView />

  <p>{{ countCon }}</p>
  <button @click="countCon++">+1</button>
  <p>history: {{ history }}</p>
  <button @click="undo()">undo</button>
  <p>userInputCon: {{ userInputCon}}</p>
  <input v-model="userInputCon" type="text" />
  <p>history2: {{ history2 }}</p>
  <button @click="undo2">undo2</button>

  <!-- defineModel -->
  <CustomInput v-model.uppercase="userInput2" v-model:title-name="titleInput" />
  <button @click="userInput2='hello'">hello</button>
  <p>userInput2: {{ userInput2 }}</p>

  <!-- フォーム -->
  <h1>v-model</h1>
  <h2>Text</h2>
  <input v-model.lazy="userInput" type="number" />
  <p>{{ typeof userInput }}</p>
  <h2>Textarea</h2>
  <textarea v-model.trim="message"></textarea>
  <p style="white-space: pre">{{ message }}</p>

  <h2>CheckBox</h2>
  <input id="checkbox" v-model="checked" type="checkbox" true-value="checked" false-value="not checked" />
  <label for="checkbox">{{ checked }}</label>
  <p>Fruits</p>
  <input id="Apple" v-model="fruits2" type="checkbox" value="Apple"/>
  <label for="Apple">Apple</label>
  <input id="Banana" v-model="fruits2" type="checkbox" value="Banana"/>
  <label for="Banana">Banana</label>
  <input id="Grape" v-model="fruits2" type="checkbox" value="Grape"/>
  <label for="Grape">Grape</label>
  <p>{{ fruits2 }}</p>

  <h2>Radio</h2>
  <input id="male" v-model="gender" type="radio" value="male"/>
  <label for="male">male</label>
  <input id="female" v-model="gender" type="radio" value="female"/>
  <label for="female">female</label>
  <p>{{ gender }}</p>

  <h2>Select</h2>
  <select v-model="selected">
    <option value="" disabled>Select one</option>
    <option v-for="option in ['A', 'B', 'C']" :key="option">{{ option }}</option>
  </select>
  <p>{{ selected }}</p>

  <!-- Dynamic Components -->
  <h1>Dynamic Components</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  <KeepAlive :include="['CompB','CompC']">
    <component :is="currentComp"/>
  </KeepAlive>

  <!-- toで指定した属性に追加,vueで管理外に追加 -->
  <button @click="isShow = true">Open Model</button>
  <Teleport to="body">
    <dialog v-if="isShow" open>
      <p>This is a modal!</p>
      <button @click="isShow = false">Close</button>
    </dialog>
    <h2>Teleport</h2>
    <p>{{ currentComp === CompA }}</p>
  </Teleport>
  <Teleport to="body" defer><p>A</p></Teleport>
  <Teleport to="body"><p>B</p></Teleport>
  <!--
  <KeepAlive exclude="['CompA']">
    <component :is="currentComp"/>
  </KeepAlive>
   -->
  <!-- 記録するコンポーネントの量を保持する -->
  <!--
  <KeepAlive :max="2">
    <component :is="currentComp"/>
  </KeepAlive>
   -->
  <!-- 1つのコンポーネントだけ。v-showでも、できる -->
  <!--
  <KeepAlive>
    <CompB v-if="currentComp == CompB" />
  </KeepAlive>
   -->

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

  <h1>Animation</h1>
  <div v-if="isShow2" :class="{ 'opacity-80': isShow2, 'opacity-20': !isShow2, slide: !isShow2}">Hello</div>
  <button @click="isShow2 = !isShow2">Show</button>
  <br>
  <button @click="isShow3 = !isShow3">switch</button>
  <Transition
    name="fade"
    enter-active-class="hello"
  >
    <div v-if="isShow3">Hello Fade</div>
  </Transition>
  <Transition name="slide2" appear>
    <div v-if="isShow3">Hello Slide</div>
  </Transition>

  <h1 class="animate__animated animate__bounce">An animated element</h1>

  <button @click="isShow2 = !isShow2">switch</button>
  <Transition name="fade" mode="in-out">
    <div v-if="isShow2">ON</div>
    <div v-else>OFF</div>
  </Transition>

  <Transition
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
  <div v-if="isShow2">Hello</div>
  </Transition>

  <input v-model="newFruit" type="text" />
  <button @click="fruits3.unshift(newFruit)">Add</button>
  <TransitionGroup name="fade">
    <div v-for="(fruit, index) in fruits3" :key="fruit" @click="fruits3.splice(index,1)">
      {{ fruit }}
    </div>
  </TransitionGroup>
</template>

<style scoped>
.slide2-enter-active {
  animation: slide2 1s;
}
.slide2-leave-active {
  animation: slide2 1s reverse;
}
@keyframes slide2 {
 0% {
  transform: translateX(20px);
 }
 100% {
  transform: translateX(0);
 }
}
.fade-enter-from {
 opacity: 0;
}
.hello {
  transition: opacity 1s;
}
.fade-enter-to {
 opacity: 1;
}
.fade-move {
  transition: transform 1s;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
  position: absolute;
}
.fade-leave-to {
  opacity: 0;
}

div {
  transition: opacity 1s;
}
.slide {
  animation: slide 1s;
}
.opacity-80 {
  opacity: 0.8;
}
.opacity-20 {
  opacity: 0.2;
}
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
}

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
