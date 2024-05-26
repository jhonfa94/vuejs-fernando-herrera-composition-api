import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { mount } from '@vue/test-utils';

const messages: ChatMessage[] = [
  { id: 1, message: 'Hola', itsMine: true },
  { id: 2, message: 'Mundo', itsMine: false }
];

describe('<ChatMessages />', () => {
  const wrapper = mount(ChatMessages, {
    props: {
      messages
    }
  });

  //1
  test('redneers chat messages correctly', () => {
    const chatBubles = wrapper.findAllComponents({ name: 'ChatBubble' });
    // console.log(wrapper.html());
    // console.log(chatBubles.length);
    expect(chatBubles.length).toBe(messages.length);
  });

  //2
  test('scroll down to the button afer messages update', async () => {
    //
    const scrollToMock = vi.fn();
    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElemnent;
    chatRef.scrollTo = scrollToMock;

    await wrapper.setProps({
      messages: [...messages, { id: 3, message: 'Hey', itsMine: true }]
    });

    await new Promise((r) => setTimeout(r, 150));

    // expect(scrollToMock).toHaveBeenCalledTimes(1);
    // expect(scrollToMock).toHaveBeenCalledWith({
    //   behavior: 'smooth',
    //   top: expect.any(Number)
    // });
  });
});
