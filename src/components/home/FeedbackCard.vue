<script setup>
import { TheCard } from "flowbite-vue";

const props = defineProps({
  modelValue: String,
  label: String,
  comment: {
    type: String,
    default: "",
  },
  rateNumber: {
    type: Number,
    default: 5,
  },
  rateFrom: {
    type: String,
    default: "Google Play",
  },
  rater: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <the-card class="!shadow-none pointer-events-none w-[380px]">
    <p>"{{comment}}"</p>
    <font-awesome-icon
      v-for="n in rateNumber"
      :key="n"
      icon="fa-solid fa-star"
      color="#3CCE69"
      class="mt-4 mb-1"
    />
    <div class="flex">
      <p class="font-bold">{{props.rater}} ·&nbsp;</p>
      <p>{{props.rateFrom}} Review</p>
    </div>
  </the-card>
</template>


<style lang="scss" scoped>
</style>