<template>
    <section class="w-full px-2.5 md:px-4 py-20">
      <div class="container mx-auto">
        <!-- Header -->
        <div
          class="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16"
        >
          <!-- Left: Title -->
          <div class="max-w-2xl">
            <p class="font-body capitalize text-lg font-bold mb-8 text-left">
              portfolio
            </p>
            <h3
              class="font-hero text-5xl sm:text-6xl lg:text-7xl leading-tight text-left"
            >
              We create beautiful, <br />
              <span class="text-orange">practical works</span>
            </h3>
          </div>

          <!-- Right: CTA -->
          <div class="lg:ml-auto">
            <div
              class="bg-white text-black rounded-full py-3 px-6 cursor-pointer w-fit flex items-center gap-3"
            >
              <a href="#" class="block font-body font-medium">
                View All Works
              </a>
              <img src="/icon/arrow-down.svg" alt="arrow down icon" />
            </div>
          </div>
        </div>

        <!-- Slider (فقط یک اسلاید در این نمونه) -->
        <div class="portfolio-slider">
          <div class="slide">
            <div
              class="w-full max-w-[720px] h-[380px] sm:h-[420px] lg:h-[480px] overflow-hidden rounded-2xl"
            >
              <img
                src="/image/portfolio/placeholder1.webp"
                alt="Portfolio project - Commercial video production"
                class="w-full h-full object-cover object-center rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
</template>