import { mount } from '@vue/test-utils';
import { describe, test } from 'vitest';
import MyCounter from '@/components/MyCounter.vue';

describe('<MyCounter />', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5
      }
    });
    console.log(wrapper.html());
  });
});
