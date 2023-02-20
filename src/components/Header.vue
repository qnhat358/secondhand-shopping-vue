<script setup>
import { ref, onBeforeMount } from "vue";
import Dropdown from "./common/Dropdown.vue";

const dropdownItems = ["Help Centre", "Shpock + for professionals"];
const atTopOfPage = ref(true);

// the function to call when the user scrolls, added as a method
const handleScroll = () => {
  // when the user scrolls, check the pageYOffset
  if (window.pageYOffset > 0) {
    // user is scrolled
    if (atTopOfPage.value) atTopOfPage.value = false;
  } else {
    // user is at top of page
    if (!atTopOfPage.value) atTopOfPage.value = true;
  }
};

onBeforeMount(async () => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    :class="{ scrolled: !atTopOfPage }"
    class="
      fixed
      flex
      w-full
      h-[72px]
      bg-white
      items-center
      justify-between
      flex-wrap
      m-auto
      top-0
      left-0
      animated
      transition
      duration-500
    "
  >
    <div
      class="
        container
        flex flex-wrap
        items-center
        justify-between
        mx-auto
        w-[1240px]
        px-8
      "
    >
      <div class="flex">
        <img src="../assets/images/shpock.svg" width="146.22" />
        <div class="flex items-center ml-4">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-[500px]">
            <div
              class="
                flex
                absolute
                inset-y-0
                left-0
                items-center
                pl-3
                pointer-events-none
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 z-50"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              class="
                border-[1px] border-gray-300
                rounded-full
                focus:ring-black focus:border-gray-200
                duration-150
                animation
                block
                w-full
                h-[40px]
                pl-10
                p-2.5
              "
              placeholder="What are you looking for..."
              required
            />
          </div>
        </div>
      </div>
      <div
        class="items-center justify-between w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="
            flex flex-col
            mt-4
            border border-gray-100
            rounded-lg
            bg-gray-50
            md:flex-row
            md:space-x-8
            md:mt-0
            md:text-sm
            md:font-medium
            md:border-0
            md:bg-white
            dark:bg-gray-800
            md:dark:bg-gray-900
            dark:border-gray-700
          "
        >
          <li>
            <a
              href="#"
              class="
                text-black text-[16px]
                font-bold
                hover:bg-transparent hover:text-gray-500
              "
              aria-current="page"
              >+ Add new listing</a
            >
          </li>
          <li>
            <a
              href="#"
              class="
                text-black text-[16px]
                font-bold
                hover:bg-transparent hover:text-gray-500
              "
              >Sign up</a
            >
          </li>
          <li>
            <a
              href="#"
              class="
                text-black text-[16px]
                font-bold
                hover:bg-transparent hover:text-gray-500
              "
              >Log in</a
            >
          </li>
          <li>
            <Dropdown :options="dropdownItems" location="bottom-left" menuWidth="250px">
              <template v-slot:button>
                <div
                  class="
                    text-black text-[16px]
                    font-bold
                    hover:bg-transparent hover:text-gray-500
                  "
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="black"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    /></svg
                ></div>
              </template>
            </Dropdown>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- <nav class="container mx-auto px-10 fixed w-full z-20 top-0 left-0">
    <div class="container flex content-center justify-between">
      <div class="left flex">
        <img src="../assets/images/shpock.svg" width="146.22" />
        <div class="flex items-center ml-4">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div
              class="
                flex
                absolute
                inset-y-0
                left-0
                items-center
                pl-3
                pointer-events-none
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 z-50"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-full
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                pl-10
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              placeholder="What are you looking for..."
              required
            />
          </div>
        </div>
      </div>
      <div class="right flex justify-space-between items-center">
        <p>+ Add new listing</p>
        <p>Sign up</p>
        <p>Log in</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="black"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
    </div>
  </nav> -->
</template>

<style lang="scss" scoped>
nav {
  z-index: 1000;
}

nav.scrolled {
  @apply shadow-2xl;
  border-bottom: 0px;
}
</style>


