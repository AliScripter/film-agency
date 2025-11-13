<template>
  <section class="w-full mb-20">
    <!-- Gallery Items -->
    <div class="space-y-10 mb-14">
      <!-- Item 1 -->
      <NuxtLink to="/portfolio/pizza-company" class="block video-card">
        <img
          src="/image/portfolio/placeholder1.webp"
          alt="Kaleidoscope Portfolio Project 1 - Cinematic Brand Video for Luxury Client"
          class="mx-auto w-full aspect-video object-cover object-center rounded-2xl hover:opacity-90 transition-opacity"
          loading="lazy"
        />
      </NuxtLink>

      <!-- Item 2 -->
      <NuxtLink to="/portfolio/pizza-company" class="block video-card">
        <img
          src="/image/portfolio/placeholder2.webp"
          alt="Kaleidoscope Portfolio Project 2 - High-Energy Commercial Production"
          class="mx-auto w-full aspect-video object-cover object-center rounded-2xl hover:opacity-90 transition-opacity"
          loading="lazy"
        />
      </NuxtLink>

      <!-- Item 3 -->
      <NuxtLink to="/portfolio/pizza-company" class="block video-card">
        <img
          src="/image/portfolio/placeholder3.webp"
          alt="Kaleidoscope Portfolio Project 3 - Documentary Style Corporate Film"
          class="mx-auto w-full aspect-video object-cover object-center rounded-2xl hover:opacity-90 transition-opacity"
          loading="lazy"
        />
      </NuxtLink>

      <!-- Item 4 -->
      <NuxtLink to="/portfolio/pizza-company" class="block video-card">
        <img
          src="/image/portfolio/placeholder4.webp"
          alt="Kaleidoscope Portfolio Project 4 - Music Video with Advanced VFX"
          class="mx-auto w-full aspect-video object-cover object-center rounded-2xl hover:opacity-90 transition-opacity"
          loading="lazy"
        />
      </NuxtLink>

      <!-- Item 5 -->
      <NuxtLink to="/portfolio/pizza-company" class="block video-card">
        <img
          src="/image/portfolio/placeholder5.webp"
          alt="Kaleidoscope Portfolio Project 5 - Premium Event Highlight Reel"
          class="mx-auto w-full aspect-video object-cover object-center rounded-2xl hover:opacity-90 transition-opacity"
          loading="lazy"
        />
      </NuxtLink>
    </div>

    <!-- Load More Button -->
    <div class="text-center w-full">
      <button
        class="inline-block w-full border border-neutral-5 rounded-3xl py-4 px-12 text-center font-body text-lg font-semibold cursor-pointer"
      >
        Load more Works
      </button>
    </div>
  </section>
</template>
