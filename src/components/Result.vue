<script setup>
import { ref } from "vue";
import SlideImageGroup from "./common/SlideImageGroup.vue";
import FeedbackCard from "./home/FeedbackCard.vue";
import Dropdown from "./common/Dropdown.vue";

const filterValue = ref("Bathroom Cabinets & Storage");
const searchValue = ref("result");
const isShowSlideMenu = ref(false);
const isSlideLeft = ref([false]);
const isSlideRight = ref([false]);
const mainCategories = ref([
  {
    name: "Electronics",
    icon: "tv",
    subMenu: [
      { name: "All electronics" },
      {
        name: "Phones",
        subMenu: [
          {
            name: "mobile phone",
          },
          {
            name: "smart phone",
          },
        ],
      },
      {
        name: "Televisions",
        subMenu: [
          {
            name: "4k tv",
          },
          {
            name: "full hd tv",
          },
        ],
      },
    ],
  },
  { name: "Fashion & Accessories", icon: "shirt" },
  { name: "Home & Garden", icon: "house" },
  { name: "Baby & Toddler", icon: "baby-carriage" },
  { name: "Electronics", icon: "tv" },
  { name: "Fashion & Accessories", icon: "shirt" },
  { name: "Home & Garden", icon: "house" },
  { name: "Baby & Toddler", icon: "baby-carriage" },
  { name: "Electronics", icon: "tv" },
  { name: "Fashion & Accessories", icon: "shirt" },
  { name: "Home & Garden", icon: "house" },
  { name: "Baby & Toddler", icon: "baby-carriage" },
  { name: "Electronics", icon: "tv" },
  { name: "Fashion & Accessories", icon: "shirt" },
  { name: "Home & Garden", icon: "house" },
  { name: "Baby & Toddler", icon: "baby-carriage" },
]);

const subCategories = ref([]);

const categoryClickHandle = (category, toggleMenu) => {
  if (category.subMenu) {
    isSlideLeft.value[0] = true;
    isSlideRight.value[0] = false;
    subCategories.value.push(category);
  } else {
    filterValue.value = category.name;
    toggleMenu();
    subCategories.value = [];
    isSlideLeft.value = false;
    isSlideRight.value = false;
  }
};

const categoryTurnBackClickHandle = () => {
  subCategories.value.pop();
  if (subCategories.value.length == 0) {
    isSlideLeft.value[0] = false;
    isSlideRight.value[0] = false;
  }
};
</script>

<template>
  <div class="flex items-center justify-between mx-auto w-[1240px] px-8">
    <div>
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center">
          <li class="inline-flex items-center">
            <router-link
              :to="{ name: 'home' }"
              class="
                inline-flex
                items-center
                text-base
                leading-[22px]
                font-bold
                text-black
                hover:bg-transparent hover:text-gray-500
                underline
              "
            >
              Home
            </router-link>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <a
                href="#"
                class="
                  text-base
                  leading-[22px]
                  font-bold
                  text-black
                  hover:bg-transparent hover:text-gray-500
                  underline
                "
                >{{ filterValue }}</a
              >
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-base leading-[22px] text-black">{{
                searchValue
              }}</span>
            </div>
          </li>
        </ol>
      </nav>
      <p class="font-bold text-black text-3xl leading-[42px]">
        Ads for “{{ searchValue }}” for Sale in “{{ filterValue }}”
      </p>
      <div class="flex space-x-2">
        <Dropdown
          :options="mainCategories"
          location="bottom-right"
          menuWidth="320px"
          menuHeight="360px"
        >
          <template v-slot:button>
            <button
              class="
                flex
                items-center
                justify-between
                w-full
                px-4
                py-2
                text-base
                leading-[22px]
                bg-white
                rounded-full
                border border-gray-200
                hover:bg-[#E2E8EB]
              "
            >
              Category
              <svg
                class="w-4 h-4 ml-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </template>
          <template #menu="{ toggleMenu }">
            <div class="flex relative dropdown-menu">
              <div
                class="
                  w-[320px]
                  absolute
                  transition-all
                  duration-500
                  h-[360px]
                  overflow-y-scroll
                "
                :class="{
                  'slide-to-left': isSlideLeft[0],
                  'slide-to-right': isSlideRight[0],
                }"
              >
                <ul
                  id="slide"
                  class="text-[16px] leading-[22px] py-2"
                  aria-labelledby="dropdownButton"
                >
                  <li
                    v-for="(category, index) in mainCategories"
                    :key="index"
                    :value="category.name"
                    @click="categoryClickHandle(category, toggleMenu)"
                    class="block"
                  >
                    <p
                      class="
                        block
                        px-4
                        py-2
                        hover:bg-gray-100
                        dark:hover:bg-gray-600 dark:hover:text-white
                        cursor-pointer
                      "
                    >
                      {{ category.name }}
                    </p>
                  </li>
                </ul>
              </div>
              <div
                class="
                  min-w-[320px]
                  absolute
                  left-full
                  transition-all
                  duration-500
                  h-[360px]
                  overflow-y-scroll
                "
                v-for="(subCategory, index) in subCategories"
                :key="index"
                :class="{
                  'slide-to-left': isSlideLeft[index+1],
                  'slide-to-right': isSlideRight[index+1],
                }"
              >
                <span @click="categoryTurnBackClickHandle">{{
                  subCategory.name
                }}</span>
                <ul
                  class="text-[16px] leading-[22px] py-2"
                  aria-labelledby="dropdownButton"
                >
                  <li
                    v-for="(category, index) in subCategory.subMenu"
                    :key="index"
                    :value="category.name"
                    @click="categoryClickHandle(category, toggleMenu)"
                    class="block"
                  >
                    <p
                      class="
                        block
                        px-4
                        py-2
                        hover:bg-gray-100
                        dark:hover:bg-gray-600 dark:hover:text-white
                        cursor-pointer
                      "
                    >
                      {{ category.name }}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </Dropdown>
        <Dropdown :options="mainCategories" location="bottom-right">
          <template v-slot:button>
            <button
              class="
                flex
                items-center
                justify-between
                w-full
                px-4
                py-2
                text-base
                leading-[22px]
                bg-white
                rounded-full
                border border-gray-200
                hover:bg-[#E2E8EB]
              "
            >
              Location
              <svg
                class="w-4 h-4 ml-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </template>
          <template v-slot:menu></template>
        </Dropdown>
        <Dropdown :options="mainCategories" location="bottom-right">
          <template v-slot:button>
            <button
              class="
                flex
                items-center
                justify-between
                w-full
                px-4
                py-2
                text-base
                leading-[22px]
                bg-white
                rounded-full
                border border-gray-200
                hover:bg-[#E2E8EB]
              "
            >
              Price
              <svg
                class="w-4 h-4 ml-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </template>
          <template v-slot:menu></template>
        </Dropdown>
        <Dropdown :options="mainCategories" location="bottom-right">
          <template v-slot:button>
            <button
              class="
                flex
                items-center
                justify-between
                w-full
                px-4
                py-2
                text-base
                leading-[22px]
                bg-white
                rounded-full
                border border-gray-200
                hover:bg-[#E2E8EB]
              "
            >
              Date listed
              <svg
                class="w-4 h-4 ml-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </template>
          <template v-slot:menu></template>
        </Dropdown>
        <Dropdown :options="mainCategories" location="bottom-right">
          <template v-slot:button>
            <button
              class="
                flex
                items-center
                justify-between
                w-full
                px-4
                py-2
                text-base
                leading-[22px]
                bg-white
                rounded-full
                border border-gray-200
                hover:bg-[#E2E8EB]
              "
            >
              Sort
              <svg
                class="w-4 h-4 ml-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </template>
          <template v-slot:menu></template>
        </Dropdown>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown-menu div:not(:first-child):not(:last-child) {
  transform: translateX(-200%);
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.5s;
}
.slide-enter-from {
  transform: translate(100%, 0) !important;
}
// .slide-enter-to {
//   transform: translate(0, 0);
// }
.slide-leave-to {
  transform: translate(100%, 0) !important;
}

.slide-to-left {
  transform: translateX(-100%);
}
.slide-to-right {
  transform: translateX(100%);
}

@keyframes slide-to-left {
  100% {
    margin-left: -320px;
  }
}
@keyframes slide-to-right {
  100% {
    margin-left: 0px;
  }
}

.slide-left {
  animation: 0.2s slide-left;
}
@keyframes slide-left {
  from {
    margin-left: 100%;
  }
  to {
    margin-left: 0%;
  }
}

/***** Slide Right *****/
.slide-right {
  animation: 3s slide-right;
}
@keyframes slide-right {
  from {
    margin-left: -100%;
  }
  to {
    margin-left: 0%;
  }
}

// .slide-out-enter-active,
// .slide-out-leave-active {
//   transition: 0.5s;
// }

// .slide-out-enter {
//   transform: translate(100%, 0);
// }
// .slide-out-leave-to {
//   transform: translate(-100%, 0);
// }
</style>


