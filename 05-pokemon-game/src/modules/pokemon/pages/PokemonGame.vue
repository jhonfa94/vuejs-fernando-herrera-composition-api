<script lang="ts" setup>
import PokemonPicture from '../components/PokemonPicture.vue';
import PockemonOptions from '../components/PockemonOptions.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameSatus } from '../interfaces';

const {
  randomPokemon,
  isLoading,
  gameStatus,
  pokemonOptions: options,
  checkAnswer,
  getNextRound
} = usePokemonGame();

// const opSelectedOption = (value: number) => {
//   console.log(value);
// };
</script>

<template>
  <section
    v-if="isLoading || randomPokemon.id === null"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="m-5">¿Quién es este Pokémon?</h1>
    <!-- <h3>{{ randomPokemon }}</h3> -->
    <!-- <h3 class="capitalize">{{ gameStatus }}</h3> -->
    <div class="h-20">
      <button
        v-if="gameStatus !== GameSatus.Playing"
        class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition-all"
        @click="getNextRound(4)"
      >
        ¿Jugar de nuevo?
      </button>
    </div>

    <!-- Pokemon Picture -->
    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="gameStatus !== GameSatus.Playing"
    />

    <!-- Pokemon Options -->
    <PockemonOptions
      :options
      :block-selection="gameStatus !== GameSatus.Playing"
      :correct-answer="randomPokemon.id"
      @selected-option="checkAnswer"
    />
  </section>
</template>
