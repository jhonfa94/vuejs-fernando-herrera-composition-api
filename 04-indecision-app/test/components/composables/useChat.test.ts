import { useChat } from '@/composables/useChat';
import { json } from 'stream/consumers';

describe('useChat', () => {
  //1
  test('add messages correctly onMessage is called', async () => {
    const text = 'Hola Mundo';

    const { messages, onMessage } = useChat();

    await onMessage(text);

    // expect(messages.value.length).toBe(1);
    // expect(messages.value[0].itsMine).toBe(true);
    // expect(messages.value[0].message).toBe(text);
    expect(messages.value[0]).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text
    });
  });

  //2
  test('add nothing if text is empty', async () => {
    const text = '';

    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(0);
  });

  //3
  test('gets her response correctly when message ends with ?', async () => {
    const text = '¿Quieres café?';

    const { messages, onMessage } = useChat();

    await onMessage(text);

    await new Promise((r) => setTimeout(r, 2000));

    const [myMessage, herMessage] = messages.value;

    expect(messages.value.length).toBe(2);
    expect(herMessage.itsMine).toBe(false);
    expect(herMessage).toEqual({
      id: expect.any(Number),
      image: expect.any(String),
      message: expect.any(String),
      itsMine: false
    });

    expect(myMessage).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text
    });
  });

  //4
  test('mock respose - fetch api', async () => {
    const mockResponse = { answer: 'yes', image: 'example.gif' };

    (window as any).fetch = vi.fn(async () => ({
      json: async () => mockResponse
    }));

    const text = '¿Quieres café?';

    const { messages, onMessage } = useChat();

    await onMessage(text);

    await new Promise((r) => setTimeout(r, 1600));

    const [, herMessage] = messages.value;

    expect(herMessage).toEqual({
      id: expect.any(Number),
      image: mockResponse.image,
      message: mockResponse.answer,
      itsMine: false
    });
  });
});
