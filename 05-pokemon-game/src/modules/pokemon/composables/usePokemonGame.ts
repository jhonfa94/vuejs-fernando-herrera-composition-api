import { computed, onMounted, ref } from 'vue';
import { GameSatus, type Pokemon, type PokemonListResponse } from '../interfaces';
import { pokemonApi } from '../api/pokemonApi';
import confetti from 'canvas-confetti';

export const usePokemonGame = () => {
  const gameStatus = ref<GameSatus>(GameSatus.Playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonOptions = ref<Pokemon[]>([]);

  const randomPokemon = computed(
    // () => pokemonOptions.value[Math.floor(Math.random() * pokemonOptions.value.length)]
    () => {
      const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length);
      return pokemonOptions.value[randomIndex];
    }
  );
  const isLoading = computed(() => pokemons.value.length === 0);

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');
    // console.log(response.data);

    const pokemonsArray = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/');
      const id = urlParts.at(-2) ?? 0;
      return {
        name: pokemon.name,
        id: +id
      };
    });

    return pokemonsArray.sort(() => Math.random() - 0.5);
  };

  const getNextRound = (howMany: number = 4) => {
    gameStatus.value = GameSatus.Playing;

    pokemonOptions.value = pokemons.value.slice(0, howMany);
    // console.log(pokemonOptions);

    pokemons.value = pokemons.value.slice(howMany);
  };

  const checkAnswer = (id: number) => {
    const hasWon = randomPokemon.value.id === id;
    if (hasWon) {
      gameStatus.value = GameSatus.Won;
      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 }
      });
      return;
    }

    gameStatus.value = GameSatus.Lost;
  };

  onMounted(async () => {
    // await new Promise((r) => setTimeout(r, 2500));
    // const pokemons = await getPokemons();
    pokemons.value = await getPokemons();
    // console.log(pokemons);
    getNextRound();
  });

  return {
    gameStatus,
    isLoading,
    pokemonOptions,
    getNextRound,

    randomPokemon,
    checkAnswer
  };
};
