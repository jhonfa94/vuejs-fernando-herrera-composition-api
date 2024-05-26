import { mount } from '@vue/test-utils';
import { describe, test } from 'vitest';
import MyCounter from '@/components/MyCounter.vue';

describe('<MyCounter />', () => {
  test('should match snapshot', () => {
    const value = 10;
    const wrapper = mount(MyCounter, {
      props: {
        value: value
      }
    });

    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    // expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);

    console.log(wrapper.html());
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders the counter value correctyly', () => {
    const value = 10;
    const wrapper = mount(MyCounter, {
      props: {
        value: value
      }
    });

    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
      `Square: ${value * value}`
    );

    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    expect(counterLabel.text()).toContain(`Counter: ${value}`);
    expect(squareLabel.text()).toContain(`Square: ${value * value}`);

    // console.log(wrapper.find('h3').text());
    // console.log(wrapper.html());
  });

  test('increments the counter when +1 button is clicked', async () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value
      }
    });

    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    const btnIncrement = wrapper.find('button');
    // console.log(btnIncrement.html);
    await btnIncrement.trigger('click');

    expect(counterLabel.text()).toContain(`Counter: ${value + 1}`);
    expect(squareLabel.text()).toContain(`Square: ${(value + 1) * (value + 1)}`);
  });

  test('decrements the counter when -1 button is clicked twice', async () => {
    const value = 10;
    const wrapper = mount(MyCounter, {
      props: {
        value: value
      }
    });

    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    const [, btnDecrement] = wrapper.findAll('button');
    // console.log(btnIncrement.html);
    // await btnIncrement.trigger('click');
    await btnDecrement.trigger('click');
    await btnDecrement.trigger('click');

    expect(counterLabel.text()).toContain(`Counter: ${value - 2}`);
    expect(squareLabel.text()).toContain(`Square: ${(value - 2) * (value - 2)}`);
  });
});
