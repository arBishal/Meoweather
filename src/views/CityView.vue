<template>
  <div>
    <Suspense>
      <AsyncCityView />
      <template #fallback>
        <span class="container h-96 flex items-center justify-center font-bold text-xl">Loading...</span>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncCityView from '@/components/AsyncCityView.vue';
</script>
