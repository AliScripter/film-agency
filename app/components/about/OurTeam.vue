<template>
  <section class="w-full px-2.5 md:px-4 py-20 mb-20">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Text Block + Decorative Icon (اسپن ۲ ستون در تبلت، ۱ ستون در دسکتاپ) -->
        <div class="relative lg:col-span-2 flex flex-col justify-between">
          <div>
            <p class="font-body capitalize text-lg font-bold mb-8 text-left">
              our team
            </p>
            <h3
              class="font-hero text-5xl sm:text-6xl lg:text-7xl leading-tight mb-10 text-left"
            >
              Meet the <span class="text-yellow">brains</span>
            </h3>
            <p class="font-body text-xl text-left capitalize">
              Contact us to communicate and ask questions
            </p>
          </div>

          <!-- آیکن subtract دکوراتیو -->
          <img
            src="/icon/subtract.svg"
            alt="subtract icon"
            class="absolute top-0 -right-10 w-48 lg:w-60 hidden lg:block"
            loading="lazy"
          />
        </div>

        <!-- Team Member 1 -->
        <div class="team-card">
          <img
            src="/image/team/PlaceHolder.webp"
            alt="Jennifer Le - CEO/Founder"
            class="w-full h-80 object-cover object-center rounded-t-2xl"
            loading="lazy"
          />
          <div class="team-text py-4 px-6 bg-neutral-7">
            <p class="font-hero text-xl">Jennifer Le</p>
            <p class="font-body text-base text-neutral-4 font-semibold">
              CEO/Founder
            </p>
          </div>
        </div>

        <!-- Team Member 2 -->
        <div class="team-card">
          <img
            src="/image/team/PlaceHolder2.webp"
            alt="Joeseph Amber - Director"
            class="w-full h-80 object-cover object-center rounded-t-2xl"
            loading="lazy"
          />
          <div class="team-text py-4 px-6 bg-neutral-7">
            <p class="font-hero text-xl">Joeseph Amber</p>
            <p class="font-body text-base text-neutral-4 font-semibold">
              Director
            </p>
          </div>
        </div>

        <!-- Team Member 3 -->
        <div class="team-card">
          <img
            src="/image/team/placeholder3.webp"
            alt="Adrian Sanchez - FX Artist"
            class="w-full h-80 object-cover object-center rounded-t-2xl"
            loading="lazy"
          />
          <div class="team-text py-4 px-6 bg-neutral-7">
            <p class="font-hero text-xl">Adrian Sanchez</p>
            <p class="font-body text-base text-neutral-4 font-semibold">
              FX Artist
            </p>
          </div>
        </div>

        <!-- Team Member 4 -->
        <div class="team-card">
          <img
            src="/image/team/placeholder4.webp"
            alt="Emma Collins - Marketer"
            class="w-full h-80 object-cover object-center rounded-t-2xl"
            loading="lazy"
          />
          <div class="team-text py-4 px-6 bg-neutral-7">
            <p class="font-hero text-xl">Emma Collins</p>
            <p class="font-body text-base text-neutral-4 font-semibold">
              Marketer
            </p>
          </div>
        </div>

        <!-- Team Member 5 -->
        <div class="team-card">
          <img
            src="/image/team/PlaceHolder5.webp"
            alt="Felix Bauer - Camera-man"
            class="w-full h-80 object-cover object-center rounded-t-2xl"
            loading="lazy"
          />
          <div class="team-text py-4 px-6 bg-neutral-7">
            <p class="font-hero text-xl">Felix Bauer</p>
            <p class="font-body text-base text-neutral-4 font-semibold">
              Camera-man
            </p>
          </div>
        </div>

        <!-- Team Member 6 -->
        <div class="team-card">
          <img
            src="/image/team/PlaceHolder6.webp"
            alt="Matteo Ricci - Editor"
            class="w-full h-80 object-cover object-center rounded-t-2xl"
            loading="lazy"
          />
          <div class="team-text py-4 px-6 bg-neutral-7">
            <p class="font-hero text-xl">Matteo Ricci</p>
            <p class="font-body text-base text-neutral-4 font-semibold">
              Editor
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
