<script setup>
import { useRoute } from "vue-router";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

const route = useRoute();
</script>

<template>
  <div class="w-full">
    <!-- Header -->
    <Header></Header>

    <!-- Main Content -->
    <div class="mt-[72px]">
      <slot></slot>
    </div>
    <Footer class="mt-[41px]"></Footer>
  </div>
</template>

<style lang="scss" scoped>
.loader-bar {
  z-index: 9999;
  position: absolute;
  width: 100%;
}
</style>