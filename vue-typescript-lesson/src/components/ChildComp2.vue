<script>
export default {
  props: {
    count6: {
      type: Number,
      required: true,
    }
  },
  emits: ['increment'],
  methods: {
    increment() {
      this.$emit('increment')
    }
  }
}
</script>
<template>
  <h2>ChildComp</h2>
  <p>{{ count6 }}</p>
  <button @click="increment">+1</button>
</template>
