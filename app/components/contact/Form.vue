<template>
  <section class="w-full mb-20">
    <div class="max-w-2xl mx-auto">
      <!-- Form Title -->
      <h2
        class="font-hero text-5xl sm:text-6xl lg:text-7xl text-center pt-20 pb-16 capitalize leading-tight"
      >
        Get in touch
      </h2>

      <form
        ref="formEl"
        class="space-y-10"
        id="contact-form"
        @submit.prevent="handleSubmit"
      >
        <!-- Name -->
        <input
          type="text"
          name="name"
          id="name"
          required
          autocomplete="name"
          placeholder="Name"
          class="w-full bg-black text-white font-body text-base py-4 px-6 border border-neutral-5 rounded-3xl focus:border-green focus:outline-none transition-colors placeholder:text-neutral-4"
        />

        <!-- Email -->
        <input
          type="email"
          name="email"
          id="email"
          required
          autocomplete="email"
          placeholder="Email address"
          class="w-full bg-black text-white font-body text-base py-4 px-6 border border-neutral-5 rounded-3xl focus:border-green focus:outline-none transition-colors placeholder:text-neutral-4"
        />

        <!-- Service Select -->
        <div class="relative">
          <select
            id="service"
            name="service"
            required
            class="w-full appearance-none bg-black text-white font-body text-base py-4 px-6 border border-neutral-5 rounded-3xl focus:border-green focus:outline-none transition-colors cursor-pointer"
          >
            <option value="" disabled selected hidden id="option_color">
              What’s services are you looking for?
            </option>
            <option value="commercials">Commercials</option>
            <option value="multi-camera-broadcast">
              Multi Camera Broadcast
            </option>
            <option value="music-videos">Music Videos</option>
            <option value="corporate-product-videos">
              Corporate / Product Videos
            </option>
            <option value="marketing-videos">Marketing Videos</option>
            <option value="event-wedding-videos">Event / Wedding Videos</option>
          </select>
          <div
            class="absolute inset-y-0 right-6 flex items-center pointer-events-none"
          >
            <img
              src="/icon/down-arrow.svg"
              alt="down arrow icon"
              class="w-5 h-5 text-neutral-4"
            />
          </div>
        </div>

        <!-- Message -->
        <textarea
          name="message"
          id="message"
          rows="6"
          required
          placeholder="Your project description"
          class="w-full bg-black text-white font-body text-base py-4 px-6 border border-neutral-5 rounded-3xl focus:border-green focus:outline-none transition-colors resize-none placeholder:text-neutral-4"
        ></textarea>

        <!-- Submit Button -->
        <button
          type="submit"
          ref="submitBtn"
          class="w-full bg-white text-black rounded-full py-5 font-body font-bold text-lg cursor-pointer flex items-center justify-center gap-4 transition-all"
          :disabled="isSubmitting"
        >
          <span>{{ buttonText }}</span>
          <img src="/icon/arrow-down.svg" alt="icon" class="w-6 h-6 mb-1" />
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
const formEl = ref(null);
const submitBtn = ref(null);

const isSubmitting = ref(false);
const buttonText = ref('Send Message');
const originalHTML = ref('');

// فقط در کلاینت اجرا بشه
onMounted(() => {
  if (submitBtn.value) {
    originalHTML.value = submitBtn.value.innerHTML;
  }
});

const handleSubmit = async () => {
  if (!formEl.value || isSubmitting.value) return;

  isSubmitting.value = true;
  buttonText.value = 'Sending...';

  const formData = new FormData(formEl.value);

  try {
    const response = await $fetch('https://formspree.io/f/xwpakbdo', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });

    if (response.ok || response === 'OK') {
      formEl.value.reset();
      buttonText.value = 'Sent Successfully';
      submitBtn.value.style.backgroundColor = '#05b178';
      submitBtn.value.style.color = 'white';
    } else {
      throw new Error('Formspree error');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    buttonText.value = error.message.includes('Network')
      ? 'Network Error'
      : 'Try Again';
    submitBtn.value.style.backgroundColor = '#f81616';
    submitBtn.value.style.color = 'white';
  } finally {
    // برگرداندن به حالت اولیه بعد از 4.5 ثانیه
    setTimeout(() => {
      isSubmitting.value = false;
      buttonText.value = 'Send Message';
      if (submitBtn.value) {
        submitBtn.value.innerHTML = originalHTML.value;
        submitBtn.value.style.backgroundColor = '';
        submitBtn.value.style.color = '';
      }
    }, 4500);
  }
};
</script>
