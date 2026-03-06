<script setup lang="ts">
import LogoAvenure from './LogoAvenure.vue'
</script>

<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
    <!-- Elementos decorativos de fundo -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-avenure-primary/5 rounded-full blur-3xl animate-float" />
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-avenure-primary/5 rounded-full blur-3xl animate-float" style="animation-delay: -3s" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-avenure-primary/3 rounded-full blur-3xl" />
    </div>

    <div class="relative z-10 text-center max-w-4xl mx-auto">
      <div class="flex justify-center mb-8 animate-float">
        <LogoAvenure class="w-24 h-24 text-avenure-primary drop-shadow-glow" />
      </div>
      <h1 class="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
        <span class="text-avenure-primary">avenure</span>
      </h1>
      <p class="text-xl md:text-2xl text-avenure-primary/90 font-light tracking-[0.3em] uppercase mb-12">
        Tecnologia Transparente.
      </p>
      <p class="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
        Somos uma softhouse que desenvolve soluções de software sob medida. 
        Desenvolvimento web, aplicativos móveis, sistemas empresariais e consultoria em tecnologia.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#servicos"
          class="px-8 py-4 rounded-xl bg-avenure-primary text-avenure-dark font-semibold hover:shadow-glow-lg hover:scale-105 transition-all duration-300"
        >
          Nossos Serviços
        </a>
        <a
          href="#contato"
          class="px-8 py-4 rounded-xl border-2 border-avenure-primary/50 text-avenure-primary hover:bg-avenure-primary/10 hover:border-avenure-primary transition-all duration-300"
        >
          Solicitar Orçamento
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-avenure-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>
