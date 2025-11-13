<template>
  <section class="w-full px-2.5 md:px-4 mb-20">
    <div class="container mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <img src="/icon/icon.svg" alt="Quote icon" class="mx-auto w-16 h-16" />
        <h2 class="font-hero text-4xl lg:text-5xl mt-4">
          What clients say about us
        </h2>
      </div>

      <!-- Quotes Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Quote 1 -->
        <div class="card-quote rounded-2xl bg-neutral-7 p-8">
          <p
            class="font-body text-base font-semibold text-white leading-relaxed"
          >
            “I really enjoy my work and it makes me more productive, happier and
            more successful. The coworking place builds confidence and inspires
            greater performance and greater success for both employees and
            employers.”
          </p>
          <div
            class="flex items-start flex-col sm:items-center sm:flex-row justify-between mt-10"
          >
            <div class="flex items-center gap-4">
              <img
                src="/image/user1.webp"
                alt="Rosiena Sanberg - Project Manager at Paladora"
                class="w-14 h-14 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <h3 class="font-body text-2xl text-white mb-1">
                  Rosiena Sanberg
                </h3>
                <p class="text-neutral-4 font-semibold text-sm">
                  Project Manager at Paladora
                </p>
              </div>
            </div>
            <img
              src="/image/brands/logo-1.svg"
              alt="Paladora logo"
              class="w-32 mt-2.5 sm:mt-0"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Quote 2 -->
        <div class="card-quote rounded-2xl bg-neutral-7 p-8">
          <p
            class="font-body text-base font-semibold text-white leading-relaxed"
          >
            “I really enjoy my work and it makes me more productive, happier and
            more successful. The coworking place builds confidence and inspires
            greater performance and greater success for both employees and
            employers.”
          </p>
          <div
            class="flex items-start flex-col sm:items-center sm:flex-row justify-between mt-10"
          >
            <div class="flex items-center gap-4">
              <img
                src="/image/user3.webp"
                alt="Alex Pierce - Head of Marketing at Paladora"
                class="w-14 h-14 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <h3 class="font-body text-2xl text-white mb-1">Alex Pierce</h3>
                <p class="text-neutral-4 font-semibold text-sm">
                  Head of Marketing at Paladora
                </p>
              </div>
            </div>
            <img
              src="/image/brands/logo-1.svg"
              alt="Paladora logo"
              class="w-32 mt-2.5 sm:mt-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
