<template>
  <section class="w-full px-2.5 md:px-4 pb-20">
    <div class="container mx-auto">
      <!-- Trust Text -->
      <p
        class="font-body text-neutral-4 text-center text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
      >
        More than
        <span class="text-yellow font-semibold">1 million people</span>
        across
        <span class="text-yellow font-semibold">200+ companies</span> choose
        Kaleidoscope
      </p>

      <!-- Infinite Sliding Logos -->
      <div
        class="relative overflow-hidden"
        aria-label="Trusted by leading brands"
      >
        <div class="flex animate-slide gap-8 sm:gap-12 lg:gap-16 items-center">
          <!-- First Set -->
          <div
            class="flex-shrink-0 flex items-center gap-8 sm:gap-12 lg:gap-16"
          >
            <img
              src="/image/brands/logo-1.svg"
              alt="Netflix"
              class="h-12 sm:h-14 lg:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
            <img
              src="/image/brands/logo-2.svg"
              alt="Google"
              class="h-12 sm:h-14 lg:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
            <img
              src="/image/brands/logo-3.svg"
              alt="Adobe"
              class="h-12 sm:h-14 lg:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
            <img
              src="/image/brands/logo-4.svg"
              alt="Spotify"
              class="h-12 sm:h-14 lg:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
            <img
              src="/image/brands/logo-5.svg"
              alt="Airbnb"
              class="h-12 sm:h-14 lg:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
            <img
              src="/image/brands/logo-6.svg"
              alt="Nike"
              class="h-12 sm:h-14 lg:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </div>

          <!-- Duplicate Set for Infinite Loop -->
          <div
            class="flex-shrink-0 flex items-center gap-8 sm:gap-12 lg:gap-16"
          >
            <img
              src="/image/brands/logo-1.svg"
              alt="Netflix"
              class="h-12 sm:h-14 lg:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
            <img
              src="/image/brands/logo-2.svg"
              alt="Google"
              class="h-12 sm:h-14 lg:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
            <img
              src="/image/brands/logo-3.svg"
              alt="Adobe"
              class="h-12 sm:h-14 lg:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
            <img
              src="/image/brands/logo-4.svg"
              alt="Spotify"
              class="h-12 sm:h-14 lg:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
            <img
              src="/image/brands/logo-5.svg"
              alt="Airbnb"
              class="h-12 sm:h-14 lg:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
            <img
              src="/image/brands/logo-6.svg"
              alt="Nike"
              class="h-12 sm:h-14 lg:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Fade Edges -->
        <div
          class="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent"
        ></div>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent"
        ></div>
      </div>
    </div>
  </section>
</template>
