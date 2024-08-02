<template>
  <main class="max-w-screen-md container text-black px-6 py-4 flex flex-col">
    <div class="w-full flex flex-col gap-1">
      <!-- search input -->
      <input v-model="searchQuery" @input="getSearchResults" type="text" placeholder="Search for a City or State!"
        class="px-6 py-4 w-full bg-white border rounded-full text-base sm:text-lg shadow-sm" />

      <!-- search result -->
      <ul v-if="mapboxSearchResults" class="bg-white rounded-lg py-2 text-neutral-600 text-base sm:text-lg shadow-sm">
        <p v-if="searchError" class="px-4">Sorry, something went wrong. Please try again!</p>
        <p v-if="!searchError && mapboxSearchResults.length === 0" class="px-4">
          No items match your search. Try with a different keyword!
        </p>
        <template v-else>
          <li v-for="searchResult in mapboxSearchResults" :key="searchResult.id"
            class="hover:text-black hover:bg-neutral-100 cursor-pointer px-4" @click="previewCity(searchResult)">
            {{ searchResult.place_name }}
          </li>
        </template>
      </ul>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const searchQuery = ref('');
const queryTimeout = ref(null);
const mapboxAPIKey =
  'pk.eyJ1Ijoiam9obmtvbWFybmlja2kiLCJhIjoiY2t5NjFzODZvMHJkaDJ1bWx6OGVieGxreSJ9.IpojdT3U3NENknF6_WhR2Q';
const mapboxSearchResults = ref(null);
const searchError = ref(null);

const router = useRouter();

const getSearchResults = () => {
  clearTimeout(queryTimeout.value)
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== '') {
      try {
        const result = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`
        );
        mapboxSearchResults.value = result.data.features;
        console.log(mapboxSearchResults.value);
      } catch {
        searchError.value = true;
      }

      return
    }
    mapboxSearchResults.value = null;
  }, 300);
}

const previewCity = (searchResult) => {
  console.log(searchResult);
  const [city, state] = searchResult.place_name.split(',');
  router.push({
    name: 'cityView',
    params: {
      state: state.replaceAll(' ', ''),
      city: city
    },
    query: {
      lng: searchResult.geometry.coordinates[0],
      lat: searchResult.geometry.coordinates[1],
      preview: true
    }
  });
}
</script>
