<template>
    <div
        class="flex justify-between p-4 bg-white border rounded-lg shadow-sm hover:scale-105 duration-300 hover:cursor-pointer">

        <!-- left -->
        <div class="flex flex-col">
            <h2 class="text-2xl font-bold">{{ city.city }}</h2>
            <h3> {{ city.state }}</h3>
        </div>

        <!-- right -->
        <div class="flex items-center justify-center gap-4">
            <p class="text-2xl font-semibold">
                {{ Math.round(city.weather.main.temp) }}°C
            </p>
            <div class="flex flex-col gap-1 text-xs">
                <span>
                    Highest: {{ Math.round(city.weather.main.temp_max) }}°C
                </span>
                <span>
                    Lowest: {{ Math.round(city.weather.main.temp_min) }}°C
                </span>
            </div>
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
