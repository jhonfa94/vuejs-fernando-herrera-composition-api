<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { ref, watch } from 'vue';

interface Props {
  messages: ChatMessage[];
}

const { messages } = defineProps<Props>();

// const divChatBubble = document.querySelector('.divChatBubble');
// divChatBubble?.scrollTo({
//   top: 10000,
//   behavior: 'smooth'
// });

const chatRef = ref<HTMLDivElement | null>(null);

watch(messages, () => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth'
    });
  }, 100);
});
</script>

<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4 divChatBubble">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
      <!-- <ChatBubble
        v-for="message in messages"
        :key="message.id"
        :itsm-mine="message.itsMine"
        :message="message.message"
        :image="message.image"
      /> -->
      <!-- <ChatBubble
        :itsm-mine="false"
        :message="'no'"
        image="https://yesno.wtf/assets/no/7-331da2464250a1459cd7d41715e1f67d.gif"
      /> -->
    </div>
  </div>
</template>

<style scoped></style>
