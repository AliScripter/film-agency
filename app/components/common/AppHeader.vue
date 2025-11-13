<template>
  <header class="relative z-50 bg-black">
    <div
      class="container mx-auto flex items-center justify-between h-[104px] px-2.5 md:px-4"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex-shrink-0">
        <img
          src="/icon/Logo.svg"
          alt="Kaleidoscope - Creative Film Agency"
          class="h-10 w-auto"
        />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center justify-center flex-1">
        <ul
          class="flex items-center gap-10 text-white font-body text-base font-medium"
        >
          <li>
            <NuxtLink to="/" class="hover:text-yellow transition-colors"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/about" class="hover:text-yellow transition-colors"
              >About Us</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/services" class="hover:text-yellow transition-colors"
              >Services</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/portfolio"
              class="hover:text-yellow transition-colors"
              >Portfolio</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/contact-us"
              class="hover:text-yellow transition-colors"
              >Contact Us</NuxtLink
            >
          </li>
        </ul>
      </nav>

      <!-- CTA Button (Desktop) -->
      <a
        href="#book-demo"
        class="hidden lg:flex items-center justify-center bg-white text-neutral-7 rounded-full px-6 py-3 font-body font-semibold text-sm hover:bg-yellow hover:text-neutral-7 transition-all"
      >
        Book A Demo
      </a>

      <!-- Mobile Menu Toggle -->
      <button
        ref="btn"
        type="button"
        aria-label="Open menu"
        id="mobile-menu-btn"
        class="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-yellow transition-colors z-999 cursor-pointer"
        @click="toggleMenu"
      >
        <img
          src="/icon/menu.svg"
          alt="menu icon"
          class="w-7 h-7 menu-icon"
          ref="menuIcon"
        />
        <img
          src="/icon/close.svg"
          alt="close icon"
          class="w-7 h-7 close-icon hidden"
          ref="closeIcon"
        />
      </button>
    </div>

    <!-- Mobile Navigation Panel -->
    <div
      ref="panel"
      id="mobile-nav"
      class="fixed inset-0 bg-neutral-7/50 backdrop-blur-lg hidden flex-col items-center justify-center gap-12 lg:hidden"
      aria-hidden="true"
      @click="closeOnBackdrop"
    >
      <nav class="flex flex-col items-center gap-8">
        <ul
          class="flex flex-col items-center gap-6 text-white font-body text-2xl font-medium mt-8"
        >
          <li>
            <NuxtLink href="/" class="hover:text-yellow transition-colors"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink href="/about" class="hover:text-yellow transition-colors"
              >About Us</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              href="/services"
              class="hover:text-yellow transition-colors"
              >Services</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              href="/portfolio"
              class="hover:text-yellow transition-colors"
              >Portfolio</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              href="/contact-us"
              class="hover:text-yellow transition-colors"
              >Contact Us</NuxtLink
            >
          </li>
        </ul>

        <a
          href="#book-demo"
          class="mt-6 bg-white text-neutral-7 rounded-full px-6 py-3 font-body font-semibold text-lg hover:bg-yellow transition-all"
        >
          Book A Demo
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

// Refs
const btn = ref(null);
const panel = ref(null);
const menuIcon = ref(null);
const closeIcon = ref(null);
const isOpen = ref(false);

// Router
const router = useRouter();

// توابع منو
const openMenu = () => {
  if (!panel.value) return;
  panel.value.classList.remove('hidden');
  panel.value.setAttribute('aria-hidden', 'false');
  document.body.classList.add('overflow-hidden');
  menuIcon.value?.classList.add('hidden');
  closeIcon.value?.classList.remove('hidden');
  isOpen.value = true;
};

const closeMenu = () => {
  if (!panel.value) return;
  panel.value.classList.add('hidden');
  panel.value.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('overflow-hidden');
  menuIcon.value?.classList.remove('hidden');
  closeIcon.value?.classList.add('hidden');
  isOpen.value = false;
};

const toggleMenu = () => {
  if (isOpen.value) closeMenu();
  else openMenu();
};

const closeOnBackdrop = e => {
  if (e.target === panel.value) closeMenu();
};

// بستن منو با ESC
const handleEsc = e => {
  if (e.key === 'Escape' && isOpen.value) closeMenu();
};

// --- مهم: بستن منو در هر تغییر route ---
let removeRouteListener;

onMounted(() => {
  // ESC listener
  document.addEventListener('keydown', handleEsc);

  // بستن منو در هر navigation
  removeRouteListener = router.afterEach(() => {
    if (isOpen.value) {
      closeMenu();
    }
  });
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEsc);
  if (removeRouteListener) removeRouteListener();
  document.body.classList.remove('overflow-hidden');
});
</script>
