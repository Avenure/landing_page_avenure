<script setup lang="ts">
import LogoAvenure from './LogoAvenure.vue'
</script>

<template>
  <section id="inicio" class="relative min-h-[92vh] flex flex-col items-center justify-center px-6 md:px-10 pt-32 md:pt-40 pb-28 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-avenure-primary/5 rounded-full blur-3xl animate-float" />
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-avenure-primary/5 rounded-full blur-3xl animate-float" style="animation-delay: -3s" />
    </div>

    <div class="relative z-10 text-center max-w-5xl mx-auto">
      <!-- Saudação multilíngue estilo Weboox -->
      <p class="text-avenure-primary/80 text-sm md:text-base mb-6 tracking-widest uppercase">
        hello · 你好 · もしもし · hola · olá
      </p>
      <p class="text-gray-500 text-sm mb-4">Não importa seu país. Bem-vindo a bordo!</p>

      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
        Desenvolvendo novas ideias em
        <span class="text-avenure-primary block mt-2">sites e apps · sistemas · automações</span>
      </h1>

      <p class="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
        Uma verdadeira evolução em como você se conecta com seus clientes. Nascemos para desenvolver ao mundo novos projetos e soluções em software.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#servicos"
          class="px-8 py-4 rounded-xl bg-avenure-primary text-avenure-dark font-semibold hover:shadow-glow-lg hover:scale-105 transition-all duration-300"
        >
          Nossos Produtos
        </a>
        <a
          href="#contato"
          class="px-8 py-4 rounded-xl border-2 border-avenure-primary/50 text-avenure-primary hover:bg-avenure-primary/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
        >
          Agendar Reunião
        </a>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-avenure-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>
