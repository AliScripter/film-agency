<template>
  <section class="w-full mb-20">
    <!-- Hero Image -->
    <div class="mb-10">
      <img
        src="/image/services.webp"
        alt="Kaleidoscope Studio - Professional video production team in action on set"
        class="w-full max-h-[560px] object-cover object-center rounded-2xl shadow-2xl mx-auto"
        loading="lazy"
      />
    </div>

    <!-- Content: Title + Text + CTA -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <!-- Left: Title -->
      <div class="pr-0 lg:pr-6">
        <h2 class="font-hero text-4xl sm:text-5xl lg:text-6xl leading-tight">
          We help companies find their way to greatness.
        </h2>
      </div>

      <!-- Right: Description + Button -->
      <div class="space-y-6">
        <p class="font-body text-base text-white leading-relaxed">
          We are in the thick of the digital age, and video has become one of
          the most powerful storytelling and brand communication tools. But did
          you know that behind every captivating video lies a creative team
          skilled in the art of professional video production?
        </p>
        <p class="font-body text-base text-white leading-relaxed">
          At Kaleidoscope Studio, we're at the forefront of this art. We bring
          individuals' and organizations' visions to life through high-quality,
          professional video production that shakes things up.
        </p>

        <!-- CTA Button -->
        <a
          href="/portfolio.html"
          class="inline-flex items-center gap-3 bg-white text-black rounded-full px-8 py-4 font-body font-semibold text-lg group"
        >
          <span>View Portfolios</span>
          <img
            src="/icon/arrow-down.svg"
            alt="Arrow down icon - View our portfolio"
            class="w-5 h-5 mb-1"
          />
        </a>
      </div>
    </div>
  </section>
</template>
