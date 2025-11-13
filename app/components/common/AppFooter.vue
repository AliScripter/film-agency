<template>
  <footer
    class="w-full px-2.5 md:px-4 pt-4 pb-10 bg-black text-neutral-4 font-body text-sm"
  >
    <div class="container mx-auto">
      <!-- Footer Top -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-16">
        <!-- Column 1: Logo + Description + Social -->
        <div class="space-y-8">
          <a href="#" class="block">
            <img
              src="/icon/Logo.svg"
              alt="Kaleidoscope Logo"
              class="w-32 mb-8 cursor-pointer"
            />
          </a>
          <p class="text-neutral-1 text-base leading-relaxed max-w-xs">
            Kaleidoscope - a creative agency specializing in making videos for
            strategy, marketing and production.
          </p>
          <div class="flex gap-4">
            <a href="#" aria-label="Facebook"
              ><img
                src="/icon/facebook.svg"
                alt="facebook icon"
                class="w-6 h-6"
            /></a>
            <a href="#" aria-label="Twitter"
              ><img src="/icon/twitter.svg" alt="twitter icon" class="w-6 h-6"
            /></a>
            <a href="#" aria-label="Email"
              ><img src="/icon/mail.svg" alt="mail icon" class="w-6 h-6"
            /></a>
            <a href="#" aria-label="YouTube"
              ><img src="/icon/youtube.svg" alt="youtube icon" class="w-6 h-6"
            /></a>
            <a href="#" aria-label="Vimeo"
              ><img src="/icon/vimeo.svg" alt="vimeo icon" class="w-6 h-6"
            /></a>
          </div>
        </div>

        <!-- Column 2: Main Navigation -->
        <div>
          <ul class="space-y-1">
            <li class="border-b border-neutral-5 py-4">
              <a
                href="#"
                class="flex items-center justify-between w-full font-body text-xl capitalize hover:text-white transition-colors"
              >
                Home
                <span
                  class="flex items-center justify-center w-6 h-6 rounded-full border border-neutral-5"
                >
                  <img
                    src="/icon/arrow-down.svg"
                    alt="arrow down icon"
                    class="w-4 h-4"
                  />
                </span>
              </a>
            </li>
            <li class="border-b border-neutral-5 py-4">
              <a
                href="#"
                class="flex items-center justify-between w-full font-body text-base capitalize hover:text-white transition-colors"
              >
                about us
                <span
                  class="flex items-center justify-center w-6 h-6 rounded-full border border-neutral-5"
                >
                  <img
                    src="/icon/arrow-down.svg"
                    alt="arrow down icon"
                    class="w-4 h-4"
                  />
                </span>
              </a>
            </li>
            <li class="border-b border-neutral-5 py-4">
              <a
                href="#"
                class="flex items-center justify-between w-full font-body text-base capitalize hover:text-white transition-colors"
              >
                Portfolios
                <span
                  class="flex items-center justify-center w-6 h-6 rounded-full border border-neutral-5"
                >
                  <img
                    src="/icon/arrow-down.svg"
                    alt="arrow down icon"
                    class="w-4 h-4"
                  />
                </span>
              </a>
            </li>
            <li class="border-b border-neutral-5 py-4">
              <a
                href="#"
                class="flex items-center justify-between w-full font-body text-base capitalize hover:text-white transition-colors"
              >
                Services
                <span
                  class="flex items-center justify-center w-6 h-6 rounded-full border border-neutral-5"
                >
                  <img
                    src="/icon/arrow-down.svg"
                    alt="arrow down icon"
                    class="w-4 h-4"
                  />
                </span>
              </a>
            </li>
            <li class="border-b border-neutral-5 py-4">
              <a
                href="#"
                class="flex items-center justify-between w-full font-body text-base capitalize hover:text-white transition-colors"
              >
                contact us
                <span
                  class="flex items-center justify-center w-6 h-6 rounded-full border border-neutral-5"
                >
                  <img
                    src="/icon/arrow-down.svg"
                    alt="arrow down icon"
                    class="w-4 h-4"
                  />
                </span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: External Links -->
        <div>
          <ul class="space-y-1">
            <li class="border-b border-neutral-5 py-4">
              <a
                href="#"
                class="flex items-center justify-between w-full font-body text-xl capitalize text-neutral-4 hover:text-white transition-colors"
              >
                Gumroad
                <span
                  class="flex items-center justify-center w-6 h-6 rounded-full border border-neutral-5"
                >
                  <img
                    src="/icon/arrow-down.svg"
                    alt="arrow down icon"
                    class="w-4 h-4"
                  />
                </span>
              </a>
            </li>
            <li class="border-b border-neutral-5 py-4">
              <a
                href="#"
                class="flex items-center justify-between w-full font-body text-xl capitalize text-neutral-4 hover:text-white transition-colors"
              >
                Figma Community
                <span
                  class="flex items-center justify-center w-6 h-6 rounded-full border border-neutral-5"
                >
                  <img
                    src="/icon/arrow-down.svg"
                    alt="arrow down icon"
                    class="w-4 h-4"
                  />
                </span>
              </a>
            </li>
            <li class="border-b border-neutral-5 py-4">
              <a
                href="#"
                class="flex items-center justify-between w-full font-body text-xl capitalize text-neutral-4 hover:text-white transition-colors"
              >
                Comming soon...
                <span
                  class="flex items-center justify-center w-6 h-6 rounded-full border border-neutral-5"
                >
                  <img
                    src="/icon/arrow-down.svg"
                    alt="arrow down icon"
                    class="w-4 h-4"
                  />
                </span>
              </a>
            </li>
            <li class="border-b border-neutral-5 py-4">
              <a
                href="#"
                class="flex items-center justify-between w-full font-body text-xl capitalize text-neutral-4 hover:text-white transition-colors"
              >
                Comming soon...
                <span
                  class="flex items-center justify-center w-6 h-6 rounded-full border border-neutral-5"
                >
                  <img
                    src="/icon/arrow-down.svg"
                    alt="arrow down icon"
                    class="w-4 h-4"
                  />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="border-t border-neutral-5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
      >
        <div class="flex gap-8">
          <a href="#" class="capitalize hover:text-white transition-colors"
            >Privacy Policy</a
          >
          <a href="#" class="capitalize hover:text-white transition-colors"
            >Terms & Conditions</a
          >
          <a href="#" class="capitalize hover:text-white transition-colors"
            >Support</a
          >
        </div>
        <p>
          © Copyright 2025-∞
          <a
            href="https://github.com/AliScripter"
            target="_blank"
            rel="noopener noreferrer"
            class="underline font-semibold hover:text-white"
          >
            Ali Scripter </a
          >. All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style></style>
