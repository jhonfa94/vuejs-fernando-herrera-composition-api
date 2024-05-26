import ChatBubble from '@/components/chat/ChatBubble.vue';
import { mount } from '@vue/test-utils';

describe('<ChatBubble />', () => {
  test('reders own message correctly', () => {
    const message = 'Hola Mundo ';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: true
      }
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy;
    // expect(wrapper.find('.bg-blue-200').text()).toContain(message);
    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy;
  });

  test('reders received message correctly', () => {
    const message = 'Hola Mundo ';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: false
      }
    });

    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').exists()).toBe(false);

    expect(wrapper.find('img').exists()).toBe(false);

    // expect(wrapper.find('.bg-gray-200').text()).toContain(message);

    // expect(wrapper.find('.bg-blue-200').text()).toContain(message);
  });

  test('reders received message correctly with message', () => {
    const message = 'Hola Mundo ';
    const image = 'https://example.jpg';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: false,
        image
      }
    });

    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').exists()).toBe(false);

    expect(wrapper.find('img').attributes('src')).toBe(image);

    // expect(wrapper.find('.bg-gray-200').text()).toContain(message);

    // expect(wrapper.find('.bg-blue-200').text()).toContain(message);
  });
});
