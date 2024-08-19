<template>
    <div class="p-4 bg-white border rounded-lg shadow-sm cursor-pointer">
        <div class="flex flex-col flex-1">
            <h2 class="text-2xl">{{ city.city }}</h2>
            <h3> {{ city.state }}</h3>
        </div>

        <div class="flex flex-col gap-2">
            <p class="text-2xl self-end">
                {{ Math.round(city.weather.main.temp) }}°C
            </p>
        </div>

        <div class="flex gap-2 text-xs">
            <span>
                Highest: {{ Math.round(city.weather.main.temp_max) }}°C
            </span>
            <span>
                Lowest: {{ Math.round(city.weather.main.temp_min) }}°C
            </span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    city: {
        type: Object,
        default: () => { },
    },
});
</script>
