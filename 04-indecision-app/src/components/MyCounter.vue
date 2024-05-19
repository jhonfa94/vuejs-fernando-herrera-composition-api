<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

const { counter, squareCompute } = useCounter();
// import { ref, computed } from 'vue';

// interface Props {
//     value?: number;
// }

// const props = defineProps<Props>();
// const props = defineProps({
//     value: { type: Number, required: true }
// })

// const counter = ref(props.value ?? 10);

// const squareCompute = computed(() => counter.value * counter.value);
</script>

<template>
  <section>
    <h2>My Counter</h2>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCompute }}</h3>
    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<style scoped>
.btn {
  @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;
}
</style>
