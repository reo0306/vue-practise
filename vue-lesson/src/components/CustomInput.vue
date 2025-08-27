<script setup lang="ts">
const [model, modifiers] = defineModel({
  type: String,
  default: 'default',
  set(value) {
    if (modifiers.uppercase) {
      return value.toUpperCase();
    }
    return value;
  },
});
const titleName = defineModel('titleName', {
  type: String,
  required: true,
});
</script>
<template>
  <h2>CutomInput</h2>
  <input v-model="model" type="text" />
  <button @click="model = 'hi'">Hi</button>
  <p>model: {{ model }}</p>
  <p>modifiers: {{ modifiers }}</p>
  <input v-model="titleName" type="text" />
  <p>titleName: {{ titleName }}</p>
</template>
