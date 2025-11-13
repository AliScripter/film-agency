<template>
  <section class="w-full mb-20">
    <div class="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
      <!-- Left: Image -->
      <div class="flex-1 lg:w-1/2">
        <img
          src="/image/contact-us.webp"
          alt="Kaleidoscope Studio - Modern office interior with creative team collaborating on video production"
          class="w-full h-full max-h-[560px] object-cover object-center rounded-2xl shadow-2xl"
          loading="lazy"
        />
      </div>

      <!-- Right: Information -->
      <div class="flex flex-col justify-center py-7 lg:py-0 space-y-10">
        <h2 class="font-hero text-4xl lg:text-5xl w-fit">Information</h2>

        <!-- Address -->
        <div class="w-fit">
          <p
            class="text-neutral-4 font-body font-bold text-sm uppercase tracking-wider pb-4"
          >
            Address
          </p>
          <p class="font-body text-base text-white leading-relaxed">
            6455 East Johns Crossing Suite 175<br />
            Johns Creek, GA 30097<br />
            United States.
          </p>
        </div>

        <!-- Call Us -->
        <div class="w-fit">
          <p
            class="text-neutral-4 font-body font-bold text-sm uppercase tracking-wider pb-4"
          >
            Call us
          </p>
          <p class="font-body text-base text-white">
            <a
              href="tel:+112345657823"
              class="hover:text-green transition-colors"
              >+11 2345 657823</a
            >
          </p>
          <p class="font-body text-base text-white">
            <a
              href="tel:+114523234591"
              class="hover:text-green transition-colors"
              >+11 4523 234591</a
            >
          </p>
        </div>

        <!-- Follow Us -->
        <div class="w-fit">
          <p
            class="text-neutral-4 font-body font-bold text-sm uppercase tracking-wider pb-6"
          >
            Follow us
          </p>
          <div class="flex items-center gap-6">
            <a
              href="#"
              aria-label="Follow us on Facebook"
              class="hover:scale-110 transition-transform"
            >
              <img
                src="/icon/facebook.webp"
                alt="Kaleidoscope on Facebook"
                class="w-10 h-10"
                loading="lazy"
              />
            </a>
            <a
              href="#"
              aria-label="Follow us on Twitter"
              class="hover:scale-110 transition-transform"
            >
              <img
                src="/icon/twitter.webp"
                alt="Kaleidoscope on Twitter"
                class="w-10 h-10"
                loading="lazy"
              />
            </a>
            <a
              href="mailto:araz.hello@gmail.com"
              aria-label="Email us"
              class="hover:scale-110 transition-transform"
            >
              <img
                src="/icon/mail.webp"
                alt="Email Kaleidoscope Studio"
                class="w-10 h-10"
                loading="lazy"
              />
            </a>
            <a
              href="#"
              aria-label="Subscribe to our YouTube"
              class="hover:scale-110 transition-transform"
            >
              <img
                src="/icon/youtube.webp"
                alt="Kaleidoscope on YouTube"
                class="w-10 h-10"
                loading="lazy"
              />
            </a>
            <a
              href="#"
              aria-label="Watch us on Vimeo"
              class="hover:scale-110 transition-transform"
            >
              <img
                src="/icon/vimeo.webp"
                alt="Kaleidoscope on Vimeo"
                class="w-10 h-10"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
