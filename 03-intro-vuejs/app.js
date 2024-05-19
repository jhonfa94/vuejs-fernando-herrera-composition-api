const originaQuotes = [
  {
    quote:
      "The night is darkest just before the dawn. And I promise you, the dawn is coming.",
    author: "Harvey Dent, The Dark Knight",
  },
  {
    quote: "I believe what doesn’t kill you simply makes you, stranger.",
    author: "The Joker, The Dark Knight",
  },
  {
    quote:
      "Your anger gives you great power. But if you let it, it will destroy you… As it almost did me",
    author: "Henri Ducard, Batman Begins",
  },
  {
    quote:
      "You either die a hero or live long enough to see yourself become the villain.",
    author: "Harvey Dent, The Dark Knight",
  },
  {
    quote: "If you’re good at something, never do it for free.",
    author: "The Joker, The Dark Knight",
  },
  {
    quote: "Yes, father. I shall become a bat.",
    author: "Bruce Wayne/Batman, Batman: Year One",
  },
];

const { createApp, ref, computed } = Vue;

const app = createApp({
  setup() {
    const showAuthor = ref(false);
    const quotes = ref(originaQuotes);

    const newMessage = ref("");

    const totalQuotes = computed(() => {
      return quotes.value.length;
    });

    const addQuote = () => {
      if (!newMessage.value.length > 0) {
        return;
      }

      quotes.value.unshift({
        quote: newMessage.value,
        author: "Jhon Fabio Cardona",
      });

      newMessage.value = "";

      //   console.log(quotes);
    };

    return {
      showAuthor,
      quotes,
      newMessage,
      addQuote,
      totalQuotes,
    };
  },
});

app.mount("#app");
