<script setup lang="ts">
import TopBar from '@/components/TopBar.vue'
import TheHeader from '@/components/TheHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import DiferencialSection from '@/components/DiferencialSection.vue'
import ComoContratarSection from '@/components/ComoContratarSection.vue'
import CanaisAtendimentoSection from '@/components/CanaisAtendimentoSection.vue'
import TechnologiesSection from '@/components/TechnologiesSection.vue'
import CtaSection from '@/components/CtaSection.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-avenure-gradient">
    <a href="#inicio" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-avenure-primary focus:text-avenure-dark focus:rounded-lg">
      Pular para o conteúdo
    </a>
    <TopBar />
    <TheHeader />
    <main>
      <HeroSection />
      <ServicesSection />
      <DiferencialSection />
      <ComoContratarSection />
      <CanaisAtendimentoSection />
      <TechnologiesSection />
      <CtaSection />
    </main>
    <TheFooter />
  </div>
</template>
