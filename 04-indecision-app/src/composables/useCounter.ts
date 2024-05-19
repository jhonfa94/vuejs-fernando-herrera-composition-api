import { ref, computed } from 'vue';

export const useCounter = (initialValude: number = 10) => {
  const counter = ref(initialValude);
  const squareCompute = computed(() => counter.value * counter.value);

  return {
    counter,
    squareCompute
  };
};
