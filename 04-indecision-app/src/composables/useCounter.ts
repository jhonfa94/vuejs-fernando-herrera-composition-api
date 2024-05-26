import { ref, computed } from 'vue';

export const useCounter = (initialValude: number = 10) => {
  const counter = ref(initialValude);
  const squareCounter = computed(() => counter.value * counter.value);

  return {
    counter,
    squareCounter
  };
};
