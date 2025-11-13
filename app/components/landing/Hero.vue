<template>
  <section class="w-full px-2.5 md:px-4 pt-16 pb-20">
    <div class="container mx-auto">
      <!-- Main Title + Sub Text (Side by Side on Desktop) -->
      <div
        class="grid lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-24 mb-12 lg:mb-20"
      >
        <!-- Left: Main Title -->
        <div class="lg:col-span-7">
          <h1 class="font-hero text-5xl sm:text-6xl leading-tight">
            Creative & Corporate <br />
            <span class="text-green">Video Production</span>
          </h1>
        </div>

        <!-- Right: Description + Clients -->
        <div class="lg:col-span-5 flex flex-col justify-center">
          <p class="font-body text-neutral-3 text-lg sm:text-xl mb-10">
            Kaleidoscope - a creative agency specializing in making videos for
            strategy, marketing and production.
          </p>

          <!-- Trusted Clients -->
          <div class="flex items-center gap-4">
            <div class="flex -space-x-4">
              <img
                src="/image/user1.webp"
                alt="Client avatar"
                class="w-12 h-12 rounded-full border-4 border-neutral-7 object-cover"
                loading="lazy"
              />
              <img
                src="/image/user2.webp"
                alt="Client avatar"
                class="w-12 h-12 rounded-full border-4 border-neutral-7 object-cover"
                loading="lazy"
              />
              <img
                src="/image/user3.webp"
                alt="Client avatar"
                class="w-12 h-12 rounded-full border-4 border-neutral-7 object-cover"
                loading="lazy"
              />
              <div
                class="w-12 h-12 rounded-full bg-yellow flex items-center justify-center border-4 border-neutral-7"
              >
                <img src="/icon/icon-add.svg" alt="add icon" class="w-6 h-6" />
              </div>
            </div>
            <p class="font-body font-semibold text-lg">
              <span class="text-yellow">200+</span> Popular clients
            </p>
          </div>
        </div>
      </div>

      <!-- Video - Full Width Below Text -->
      <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-6">
        <video
          controls
          controlsList="nodownload noremoteplayback"
          poster="/image/hero-img.webp"
          preload="metadata"
          class="w-full aspect-video object-cover"
          aria-label="Kaleidoscope Creative Reel 2025"
        >
          <source src="/video/test.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <!-- Optional Hover Play Icon -->
        <div
          class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/40 pointer-events-none"
        >
          <div
            class="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center"
          >
            <svg class="w-12 h-12 ml-2" fill="white" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
