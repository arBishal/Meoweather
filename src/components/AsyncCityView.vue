<template>
  <div class="container max-w-screen-md flex flex-col flex-1 gap-6 items-center">
    <!-- banner -->
    <div v-if="route.query.preview" class="p-4 w-full text-center font-light bg-white rounded-lg shadow-sm border">
      <p class="text-lg">
        You are curently in Preview mode.
      </p>
      <p class="text-lg">
        To start tracking the city, click the '<b>+</b>' icon in the top.
      </p>
    </div>

    <!-- overview -->
    <div class="w-full flex flex-col items-center gap-2 px-8 py-6 bg-white rounded-lg shadow-sm border mb-6">
      <!-- city heading -->
      <h1 class="text-4xl font-bold">
        {{ route.params.city }}
      </h1>

      <!-- date and time -->
      <span class="text-sm sm:text-base font-light">
        {{
          new Date(weatherData.currentTime).toLocaleDateString(
            "en-us",
            {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            }
          )
        }}
      </span>
      <span class="text-sm sm:text-base font-light -mt-2">
        {{
          new Date(weatherData.currentTime).toLocaleTimeString(
            "en-us",
            {
              timeStyle: "full",
            }
          )
        }}
      </span>

      <!-- temp -->
      <div class="relative text-8xl font-bold mt-2">
        {{ Math.round(weatherData.current.temp) }}&deg;
        <span class="absolute bottom-0 right-0 text-4xl mr-1.5 mb-2">C</span>
      </div>
      <span class="text-center text-xl font-semibold">
        Feels Like {{ Math.round(weatherData.current.feels_like) }}&deg; Celsius
      </span>

      <p class="capitalize">
        {{ weatherData.current.weather[0].description }}
      </p>
      <img class="w-36 h-auto" :src="`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`
        " alt="" />

      <hr class="border-opacity-10 border w-full" />

      <!-- Hourly Weather -->
      <div class="max-w-screen-md w-full py-6 flex flex-col items-center justify-center gap-4">

        <h2 class="text-2xl font-bold">Hourly Weather</h2>
        <div class="w-full flex gap-8 overflow-auto">
          <div v-for="hourData in weatherData.hourly" :key="hourData.dt"
            class="flex flex-col gap-2 w-12 h-auto items-center mb-4">
            <p class="whitespace-nowrap text-md w-full">
              {{
                new Date(
                  hourData.currentTime
                ).toLocaleTimeString("en-us", {
                  hour: "numeric",
                })
              }}
            </p>
            <img class="w-auto h-[50px] object-cover" :src="`http://openweathermap.org/img/wn/${hourData.weather[0].icon}@2x.png`
              " alt="" />
            <p class="text-md text-center w-full">
              {{ Math.round(hourData.temp) }}&deg;
            </p>
          </div>
        </div>

      </div>

      <hr class="border-opacity-10 border w-full" />

      <!-- Weekly Weather -->
      <div class="max-w-screen-md w-full py-6 flex flex-col items-center justify-between gap-4">

        <h2 class="text-2xl font-bold">7 Day Forecast</h2>

        <div v-for="day in weatherData.daily" :key="day.dt" class="w-full flex justify-between items-center">
          <p class="flex-1">
            {{
              new Date(day.dt * 1000).toLocaleDateString(
                "en-us",
                {
                  weekday: "long",
                }
              )
            }}
          </p>
          <img class="w-[50px] h-[50px] object-cover" :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
            " alt="" />
          <div class="flex gap-2 flex-1 justify-end">
            <p>H: {{ Math.round(day.temp.max) }}</p>
            <p>L: {{ Math.round(day.temp.min) }}</p>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();

const getWeatherData = async () => {
  try {
    const weatherData = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${route.query.lat}&lon=${route.query.lng}&exclude={part}&appid=7efa332cf48aeb9d2d391a51027f1a71&units=metric`
    )

    // cal current date & time
    const localOffset = new Date().getTimezoneOffset() * 60000;
    const utc = weatherData.data.current.dt * 1000 + localOffset;
    weatherData.data.currentTime =
      utc + 1000 * weatherData.data.timezone_offset;

    // cal hourly weather offset
    weatherData.data.hourly.forEach((hour) => {
      const utc = hour.dt * 1000 + localOffset;
      hour.currentTime =
        utc + 1000 * weatherData.data.timezone_offset;
    });

    return weatherData.data;
  } catch (err) {
    console.log(err)
  }
}

const weatherData = await getWeatherData();
console.log(weatherData);

</script>
