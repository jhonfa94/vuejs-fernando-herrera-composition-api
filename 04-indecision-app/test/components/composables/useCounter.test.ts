import { useCounter } from '@/composables/useCounter';

describe('useCounter', () => {
  test('initializes coutner with provided default values', () => {
    const { counter, squareCounter } = useCounter(5);

    expect(counter.value).toBe(5);
    expect(squareCounter.value).toBe(5 * 5);
  });

  test('initializes coutner with provided initial value', () => {
    const initialValue = 10;

    const { counter, squareCounter } = useCounter(initialValue);

    expect(counter.value).toBe(initialValue);
    expect(squareCounter.value).toBe(initialValue * initialValue);
  });

  test('increments coutner correctyly', () => {
    const { counter, squareCounter } = useCounter();

    counter.value++;

    expect(counter.value).toBe(11);
    expect(squareCounter.value).toBe(121);
  });
});
