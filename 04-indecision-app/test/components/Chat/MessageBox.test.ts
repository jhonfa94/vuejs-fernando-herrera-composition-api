import MessageBox from '@/components/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';

describe('<MessageBox/>', () => {
  const wrapper = mount(MessageBox);

  // 1
  test('render input and button elemnts correctly', () => {
    // console.log(wrapper.html());
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  //2
  test('emits sendMessage event when button is clicked with message value', async () => {
    const message = 'Hola Mundo';

    await wrapper.find('input[type="text"').setValue(message);
    await wrapper.find('button').trigger('click');

    //show details emitted
    // console.log(wrapper.emitted('sendMessage'));
    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);

    expect((wrapper.vm as any).message).toBe('');
  });

  //3
  test('emits sendMessage event when keypress.enter is trigger with message value', async () => {
    const message = 'Hola Mundo';

    const input = wrapper.find('input');
    await input.setValue(message);
    await input.trigger('keypress.enter');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
  });

  //4
  test('emits sendMessage event when keypress.enter is trigger with message value', async () => {
    const wrapper = mount(MessageBox);
    const input = wrapper.find('input');

    await input.trigger('keypress.enter');
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')).toBeFalsy();
  });
});
