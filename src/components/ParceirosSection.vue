<script setup lang="ts">
const integrations = [
  { name: 'AWS', logo: '/logos/aws.png', logoCrop: false },
  { name: 'ChatGPT', logo: '/logos/aws-chatgpt.png', logoCrop: true },
  { name: 'Stripe', logo: '/logos/stripe.svg', logoCrop: false },
  { name: 'PayPal', logo: '/logos/paypal.svg', logoCrop: false },
  { name: 'WhatsApp', logo: '/logos/whatsapp.svg', logoCrop: false },
  { name: 'Cloudflare', logo: 'https://cdn.simpleicons.org/cloudflare/F38020', logoCrop: false },
  { name: 'GitHub', logo: '/logos/github.svg', logoCrop: false },
  { name: 'AbacatePay', logo: '/logos/abacatepay.svg', logoCrop: false },
]
</script>

<template>
  <section class="py-20 px-6 border-t border-b border-white/5">
    <div class="max-w-5xl mx-auto">
      <p class="text-center text-gray-500 text-sm mb-10">
        Integramos com as melhores ferramentas
      </p>

      <div class="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
        <div
          v-for="(item, i) in integrations"
          :key="i"
          class="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
          :title="item.name"
        >
          <div v-if="item.logoCrop" class="w-20 h-10 overflow-hidden">
            <img
              :src="item.logo"
              :alt="item.name"
              class="h-10 w-[200%] max-w-none object-contain object-center"
              style="margin-left: -100%"
            />
          </div>
          <img
            v-else
            :src="item.logo"
            :alt="item.name"
            class="h-8 md:h-10 w-auto max-w-[120px] object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>
