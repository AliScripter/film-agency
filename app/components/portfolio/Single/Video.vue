<template>
  <section class="w-full mb-20">
    <div class="mb-14">
      <video
        controls
        controlslist="nodownload"
        poster="/image/portfolio/placeholder3.webp"
        class="w-full max-h-full aspect-video object-center rounded-2xl shadow-2xl mx-auto"
        preload="metadata"
      >
        <source src="/video/test.mp4" type="video/mp4" />
        <track
          kind="captions"
          src="/video/test.vtt"
          srclang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </div>

    <!-- Overview -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <!-- Title -->
      <div>
        <h2 class="font-hero text-5xl sm:text-6xl lg:text-7xl leading-tight">
          Overview
        </h2>
      </div>

      <!-- Description -->
      <div class="space-y-4">
        <p class="font-body text-base text-white leading-relaxed">
          Pizza Company is serving up delicious from scratch Pizza and Hot Wings
          in Dallas. Dine in or Order Online!
        </p>
        <p class="font-body text-base text-white leading-relaxed">
          The Pizza Company Video is a promotional short by Kaleidoscope. It was
          available on the Pizza Company website from 2024 to now.
        </p>
        <p class="font-body text-base text-white leading-relaxed">
          You can watch the new Pizza Company Commercial featuring Craig
          Robinson for Pizza Company Big Dinner Box. Craig Robinson introduces
          the Big Dinner Box.
        </p>
      </div>
    </div>
  </section>
</template>
