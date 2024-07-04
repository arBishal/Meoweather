<template>
  <header class="sticky top-0 bg-primary shadow-md">
    <nav class="container flex items-center justify-between gap-4 py-4 text-white">
      <!-- left component -->
      <RouterLink :to="{ name: 'home' }">
        <div class="flex justify-center items-center gap-3">
          <i class="fa-solid fa-cloud-sun text-2xl"></i>
          <span class="text-2xl font-bold">Vieweather</span>
        </div>
      </RouterLink>

      <!-- right component -->
      <div class="flex gap-4">
        <i
          class="fa-solid fa-circle-question text-2xl sm:text-3xl hover:text-neutral-200 duration-150 cursor-pointer"
        ></i>
        <i
          class="fa-solid fa-circle-plus text-2xl sm:text-3xl hover:text-neutral-200 duration-150 cursor-pointer"
        ></i>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
