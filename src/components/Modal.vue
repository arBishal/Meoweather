<template>
  <Teleport to="body">
    <Transition name="modal-backdrop">
      <!-- backdrop -->
      <div
        v-show="modalActive"
        class="absolute w-full bg-black bg-opacity-50 h-screen border-0 top-0 left-0 flex justify-center items-center px-8"
      >
        <!-- modal content -->
        <Transition name="modal-content">
          <div
            v-if="modalActive"
            class="m-auto p-6 bg-white max-w-screen-md min-w-96 rounded flex flex-col gap-4 justify-center items-center"
          >
            <slot />
            <button
              @click="$emit('closeModal')"
              class="bg-black text-white px-4 py-2 hover:bg-neutral-700 rounded w-1/4 min-w-24 mt-4"
            >
              Close
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineEmits(['closeModal'])
defineProps({
  modalActive: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.modal-backdrop-enter-active,
.modal-content-enter-active {
  transition: opacity 0.3s;
}

.modal-backdrop-enter-from,
.modal-backdrom-enter-to {
  opacity: 0;
}
</style>
