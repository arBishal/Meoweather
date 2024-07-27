<template>
  <header class="sticky top-0 bg-white border">
    <nav class="container max-w-screen-lg flex items-center justify-between gap-4 py-4 text-black shadow-sm">
      <!-- left component -->
      <RouterLink :to="{ name: 'home' }">
        <div class="flex justify-center items-center gap-3">
          <i class="fa-solid fa-cloud-sun text-2xl"></i>
          <span class="text-2xl font-bold">Vieweather</span>
        </div>
      </RouterLink>

      <!-- right component -->
      <div class="flex gap-4">
        <i class="fa-solid fa-circle-plus text-2xl sm:text-3xl hover:text-neutral-700 duration-150 cursor-pointer"></i>
        <i @click="toggleModal"
          class="fa-solid fa-circle-question text-2xl sm:text-3xl hover:text-neutral-700 duration-150 cursor-pointer"></i>
      </div>

      <!-- modal -->
      <Modal :modalActive="modalActive" @closeModal="toggleModal">
        <h1 class="w-full text-black text-2xl font-bold">About the App</h1>
        <hr class="w-full" />

        <p class="w-full">
          The Local Weather allows you to track the current and future weather of cities of your
          choosing.
        </p>

        <h2 class="w-full text-xl font-bold">How it works</h2>
        <ol class="w-full list-disc list-inside">
          <li>Search for your city by entering the name into the search bar.</li>
          <li>
            Select a city within the results, this will take you to the current weather for your
            selection.
          </li>
          <li>
            Track the city by clicking on the "+" icon in the top right. This will save the city to
            view at a later time on the home page.
          </li>
        </ol>

        <h2 class="w-full text-xl font-bold">Removing a city</h2>
        <p>
          If you no longer wish to track a city, simply select the city within the home page. At the
          bottom of the page, there will be am option to delete the city.
        </p>
      </Modal>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import Modal from './Modal.vue';

const modalActive = ref(false)
const toggleModal = () => {
  modalActive.value = !modalActive.value;
}
</script>
