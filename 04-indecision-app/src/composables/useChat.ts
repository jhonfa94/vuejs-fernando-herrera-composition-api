import { ref } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no.response';
import { sleep } from '@/helpers/sleep';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([
    {
      id: new Date().getTime(),
      message: 'Hola mundo!!',
      itsMine: true
    },
    {
      id: new Date().getTime() + 1,
      message: 'No!!',
      itsMine: false,
      image: 'https://yesno.wtf/assets/no/7-331da2464250a1459cd7d41715e1f67d.gif'
    },
    {
      id: new Date().getTime() + 1,
      message: '¿Quieres ir a tomar cafe?',
      itsMine: false,
      image: 'https://yesno.wtf/assets/no/30-d37eee83c3c2180de4edb7da6fa9f5b7.gif'
    }
  ]);

  const getHerResponse = async () => {
    const resp = await fetch(`https://yesno.wtf/api`);
    const data = (await resp.json()) as YesNoResponse;

    return data;
  };

  const onMessage = async (text: string) => {
    if (text.length === 0) return;

    messages.value.push({
      id: new Date().getTime() + 1,
      message: text,
      itsMine: true
      // image: 'https://yesno.wtf/assets/no/30-d37eee83c3c2180de4edb7da6fa9f5b7.gif'
    });

    //Evaluar si termina con un ?
    if (!text.endsWith('?')) return;

    await sleep(1);

    const { answer, image } = await getHerResponse();

    messages.value.push({
      id: new Date().getTime() + 2,
      message: answer,
      itsMine: false,
      image: image
    });
  };

  return {
    // Properties
    messages,

    // Methods
    onMessage
  };
};
