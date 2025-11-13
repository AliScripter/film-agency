<template>
  <section
    class="h-28 md:h-40 flex items-center overflow-hidden mb-20"
    :class="bgClass"
  >
    <div class="flex animate-slide-work gap-16 items-center">
      <!-- کپی دوباره برای loop -->

      <div class="flex items-center flex-shrink-0">
        <img src="/icon/star.svg" alt="star icon" class="mx-8 w-7 h-7" />
        <p class="font-hero text-neutral-7 text-3xl">Let’s Work Together!</p>
      </div>

      <div class="flex items-center flex-shrink-0">
        <img src="/icon/star.svg" alt="star icon" class="mx-8 w-7 h-7" />
        <p class="font-hero text-neutral-7 text-3xl">Let’s Work Together!</p>
      </div>

      <div class="flex items-center flex-shrink-0">
        <img src="/icon/star.svg" alt="star icon" class="mx-8 w-7 h-7" />
        <p class="font-hero text-neutral-7 text-3xl">Let’s Work Together!</p>
      </div>

      <div class="flex items-center flex-shrink-0">
        <img src="/icon/star.svg" alt="star icon" class="mx-8 w-7 h-7" />
        <p class="font-hero text-neutral-7 text-3xl">Let’s Work Together!</p>
      </div>

      <div class="flex items-center flex-shrink-0">
        <img src="/icon/star.svg" alt="star icon" class="mx-8 w-7 h-7" />
        <p class="font-hero text-neutral-7 text-3xl">Let’s Work Together!</p>
      </div>

      <div class="flex items-center flex-shrink-0">
        <img src="/icon/star.svg" alt="star icon" class="mx-8 w-7 h-7" />
        <p class="font-hero text-neutral-7 text-3xl">Let’s Work Together!</p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  bgClass: {
    type: String,
    default: 'bg-blue',
  },
});
</script>
