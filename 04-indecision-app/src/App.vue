<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script>

<template>
  <div>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>

    <hr />

    <MyCounter :value="10" />
    <hr />
    <MyCounterScript :value="10" />
    <hr />
    <MyCounterScript2 :value="10" />
    <hr />
    <!-- <MyCounter :value="5" /> -->
  </div>
</template>
