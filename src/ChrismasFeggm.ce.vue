<script setup>
import backgroundImg from "./assets/background.jpg";
</script>

<template>
  <div
    class="christmas-feggm mx-auto relative max-sm:max-w-xs sm:max-w-screen-sm"
  >
    <img :src="backgroundImg" />
    <div class="absolute left-0 right-0 top-0 bottom-0 overflow-clip">
      <div
        class="float-left h-full w-[35%] [shape-outside:var(--left-shape)]"
      ></div>
      <div
        class="float-right h-full w-[35%] [shape-outside:var(--right-shape)]"
      ></div>
      <div class="mt-2 max-sm:[hyphens:auto] sm:mt-16 sm:text-xl sm:leading-10">
        <div class="max-sm:hidden sm:space-y-4">
          <p class="ml-[35%]">
            Hallo,<br />schön dass Du auf unserer Homepage vorbeischaust. Unsere
            Gottesdienste um Weihnachten und Neujahr findest Du hier unten. Sie
            finden alle in unserem Gemeindezentrum in der Seßmarstaße 45 statt.
          </p>
          <p class="ml-[18%]">
            Du bist dazu herzlich eingeladen. Wir freuen uns darauf, Dir dort zu
            begegnen.
          </p>
        </div>
        <div class="sm:hidden">
          Du bist herzlich zu unseren Gottesdiensten um Weihnachten und Neujahr
          in unserem Gemeindezentrum in der
          <strong>Seßmarstaße 45</strong> eingeladen. Wir freuen uns darauf, Dir
          dort zu begegnen.
        </div>
        <ul class="mt-8 space-y-2 ml-[18%]">
          <li class="sm:-indent-14 sm:pl-14">
            <strong>24.12. 16:00 Uhr</strong>, Heiligabendgottesdienst
          </li>
          <li class="sm:-indent-14 sm:pl-14">
            <strong>25.12. 10:30 Uhr</strong>, Weihnachtsgottesdienst
          </li>
          <li class="sm:pt-8 sm:-indent-14 sm:pl-14">
            <strong>01.01. 18:00 Uhr</strong>, Neujahrsgottesdienst mit
            Abendmahl
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.christmas-feggm {
  --left-shape: polygon(
    95.882% 0.098%,
    87.255% 9.805%,
    99.02% 18.195%,
    44.314% 21.317%,
    40.588% 22.829%,
    25.686% 22.976%,
    16.667% 25.561%,
    4.51% 26.878%,
    4.314% 32.39%,
    10.392% 33.951%,
    21.961% 34.439%,
    29.216% 35.317%,
    38.235% 37.317%,
    43.333% 40%,
    47.255% 42.341%,
    46.471% 44.976%,
    42.745% 47.756%,
    36.667% 50.049%,
    27.647% 52.049%,
    16.863% 53.073%,
    10.392% 53.463%,
    4.706% 53.122%,
    1.765% 52.976%,
    1.961% 60.732%,
    6.275% 61.024%,
    12.745% 61.317%,
    19.412% 61.463%,
    27.059% 61.61%,
    31.176% 62.293%,
    31.373% 63.707%,
    27.059% 68.341%,
    23.137% 70.585%,
    20.588% 74.439%,
    20.588% 77.415%,
    22.353% 78.732%,
    19.412% 79.561%,
    16.275% 91.268%,
    15.098% 92.341%,
    2.157% 91.756%,
    2.157% 95.073%,
    6.078% 96%,
    4.51% 98.878%,
    7.647% 99.122%,
    13.137% 98.049%,
    15.686% 98.049%,
    19.216% 96.585%,
    25.294% 96.146%,
    27.451% 96.244%,
    30.784% 95.463%,
    35.294% 95.463%,
    37.059% 95.756%,
    39.412% 95.22%,
    43.725% 95.902%,
    51.176% 95.512%,
    56.078% 96.585%,
    63.333% 96.878%,
    66.078% 97.951%,
    68.235% 98.829%,
    70.588% 100.049%,
    0.392% 100.049%,
    0.392% 0.098%,
    95.882% 0.098%
  );
  --right-shape: polygon(
    99.23% 0.1%,
    98.27% 28.54%,
    94.81% 29.17%,
    94.42% 29.8%,
    90.19% 30.54%,
    90.77% 31.9%,
    90.58% 32.2%,
    89.04% 32.98%,
    91.15% 33.76%,
    93.27% 34.29%,
    92.5% 35.17%,
    90.96% 35.95%,
    91.54% 37.07%,
    88.85% 38.05%,
    90.96% 39.37%,
    90% 40.44%,
    91.54% 41.51%,
    91.54% 42.83%,
    90.38% 43.71%,
    90% 43.95%,
    87.5% 44.2%,
    86.15% 45.41%,
    82.5% 46.24%,
    82.5% 47.22%,
    79.04% 47.46%,
    76.73% 48.83%,
    73.65% 48.78%,
    70.58% 50.24%,
    68.65% 50.54%,
    68.08% 51.17%,
    66.92% 52.05%,
    63.46% 52.24%,
    61.54% 52.24%,
    60.96% 52.73%,
    61.73% 53.12%,
    61.35% 54%,
    58.46% 54.2%,
    55.96% 54.78%,
    55.58% 55.37%,
    52.69% 55.51%,
    50.38% 55.46%,
    49.42% 55.95%,
    49.42% 56.39%,
    50% 57.17%,
    51.92% 57.66%,
    53.46% 57.95%,
    54.62% 58%,
    54.04% 58.44%,
    54.23% 59.07%,
    55.38% 59.51%,
    58.27% 59.32%,
    59.42% 59.95%,
    60.77% 60.78%,
    63.85% 60.83%,
    65.58% 61.02%,
    63.65% 61.76%,
    64.81% 62.54%,
    63.27% 63.12%,
    59.81% 63.66%,
    56.35% 63.85%,
    53.27% 64.05%,
    50.58% 64.68%,
    48.85% 65.32%,
    44.23% 65.8%,
    41.35% 66.83%,
    41.35% 67.85%,
    41.15% 68.54%,
    40.19% 68.93%,
    37.5% 68.29%,
    33.08% 68%,
    26.73% 68.15%,
    20.77% 68.59%,
    17.5% 69.37%,
    13.08% 70.15%,
    13.27% 71.17%,
    9.81% 71.8%,
    9.81% 72.68%,
    10.38% 73.02%,
    7.31% 73.22%,
    7.5% 74.24%,
    0.38% 74.63%,
    1.35% 75.37%,
    0.77% 76.05%,
    3.08% 77.17%,
    4.42% 77.61%,
    6.15% 78.2%,
    12.31% 78.73%,
    15.58% 79.46%,
    7.12% 81.76%,
    9.42% 84.24%,
    12.12% 86.98%,
    6.54% 87.71%,
    5.38% 89.02%,
    6.54% 90.44%,
    12.69% 92.2%,
    12.31% 93.22%,
    13.08% 94.39%,
    16.35% 95.95%,
    30.58% 94.2%,
    30.19% 95.85%,
    29.62% 97.61%,
    42.69% 100.05%,
    99.23% 100.05%,
    99.23% 0.1%
  );
}
</style>
