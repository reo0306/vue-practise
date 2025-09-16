<script setup lang="ts">
import { computed, onMounted, ref, useTemplateRef } from 'vue';
import ChildComp from '@/components/ChildComp.vue';
import ChildComp2 from '@/components/ChildComp2.vue';
import ChildComp2 from '@/components/ChildComp2.vue';

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

/*
// Options API
export default {
  components: {
    ChildComp2
  }
  data() {
    return {
      count5: 0,
      parentCountt: 0,
    }
  },
  computed: {
    dobuleCount() {
      return this.count5 * 2
    }
  },
  watch: {
    count() {
      console.log('count watcher')
    }
  },
  beforeMounted() {
    console.log('beforeMounted')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdated() {
    console.log('beforeUpdated')
  }
  updated() {
    console.log('updated')
  }
  unmounted() {
    console.log('unmounted')
  },
  methods: {
    countUp() {
      this.count5++
    }
  }
}*/
</script>

<template>
  <h1>Options API</h1>
  <!--
  <ChildComp2 :count6="parsentCount" @increment="parentCount++" />
  <p>{{ count5 }}</p>
  <p>{{ doubuleCount }}</p>
  -->

  <h1>TypeScript</h1>
  <input ref="user-input" type="text" />
  <button @click="countUp">+1</button>
  <p>count:{{ count }}</p>
  <!-- <ChildComp :course="courseTitle"/>-->
  <ChildComp v-model="userInput" />
  <p>userInput2: {{ userInput2 }}</p>
</template>
