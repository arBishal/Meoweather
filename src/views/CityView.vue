<template>
  <div>
    <Suspense>
      <AsyncCityView />
      <template #fallback>
        <div class="container border-white h-20 w-20 animate-spin rounded-full border-8 border-t-neutral-600 mt-24">
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncCityView from '@/components/AsyncCityView.vue';
</script>
