<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const categories = [
  "sport",
  "services",
  "toys-games",
  "sport",
  "services",
  "toys-games",
  "sport",
  "services",
  "toys-games",
  "sport",
  "services",
  "toys-games",
];

const getImageUrl = (name) => {
  return new URL(`../../assets/images/${name}.png`, import.meta.url).href;
};
</script>
<template>
  <carousel :items-to-show="10" snapAlign='start' :mouseDrag="false" class="w-[1080px] mx-auto">
    <slide v-for="slide in categories" :key="slide">
      <img :src="getImageUrl(slide)" class="rounded-lg w-[100px] cursor-pointer hover:brightness-90" alt="..." />
    </slide>

    <template #addons>
      <navigation>
        <template #prev>
          <span
            class="
              -left-[22px]
              inline-flex
              items-center
              justify-center
              w-8
              h-8
              rounded-full
              bg-white
              shadow-slate-400
              shadow-md
              dark:bg-gray-800/30
              group-hover:bg-white/50
              dark:group-hover:bg-gray-800/60
              group-focus:ring-4 group-focus:ring-white
              dark:group-focus:ring-gray-800/70
              group-focus:outline-none
            "
          >
            <svg
              aria-hidden="true"
              class="w-3 h-3 text-black dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </template>
        <template #next>
          <span
            class="
              -right-[22px]
              inline-flex
              items-center
              justify-center
              w-8
              h-8
              rounded-full
              bg-white
              shadow-slate-400
              shadow-md
              dark:bg-gray-800/30
              group-hover:bg-white/50
              dark:group-hover:bg-gray-800/60
              group-focus:ring-4 group-focus:ring-white
              dark:group-focus:ring-gray-800/70
              group-focus:outline-none
            "
          >
            <svg
              aria-hidden="true"
              class="w-3 h-3 text-black dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </span>
        </template>
      </navigation>
    </template>
  </carousel>
</template>


<style lang="scss" scoped>
:deep .carousel__prev--disabled {
    display: none !important;
}
:deep .carousel__next--disabled {
    display: none !important;
}
</style>