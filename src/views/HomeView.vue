<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import CtaSection from '@/components/CtaSection.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-avenure-gradient">
    <TheHeader />
    <main>
      <HeroSection />
      <ServicesSection />
      <CtaSection />
    </main>
    <TheFooter />
  </div>
</template>
