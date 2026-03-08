<script setup lang="ts">
import { ref } from 'vue'
import LogoAvenure from './LogoAvenure.vue'

const isMenuOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 bg-avenure-dark/95 backdrop-blur-md border-b border-white/5">
    <nav class="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2 group">
        <LogoAvenure class="w-[50px] h-[50px] text-avenure-primary group-hover:animate-glow-pulse transition-all" />
        <span class="text-xl font-semibold text-white group-hover:text-avenure-primary transition-colors">avenure</span>
      </a>

      <div class="hidden md:flex items-center gap-8">
        <a href="#inicio" class="text-gray-300 hover:text-avenure-primary transition-colors">Início</a>
        <a href="#servicos" class="text-gray-300 hover:text-avenure-primary transition-colors">Produtos</a>
        <a href="#como-contratar" class="text-gray-300 hover:text-avenure-primary transition-colors">Como Contratar</a>
        <a href="#contato" class="text-gray-300 hover:text-avenure-primary transition-colors">Contato</a>
        <a
          href="#contato"
          class="px-5 py-2.5 rounded-lg bg-avenure-primary text-avenure-dark font-semibold hover:shadow-glow transition-all"
        >
          Agendar Reunião
        </a>
      </div>

      <button
        class="md:hidden p-2 text-gray-300 hover:text-avenure-primary"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMenuOpen" class="md:hidden px-6 py-4 border-t border-white/5 bg-avenure-darker/95">
        <div class="flex flex-col gap-4">
          <a href="#inicio" class="text-gray-300 hover:text-avenure-primary" @click="isMenuOpen = false">Início</a>
          <a href="#servicos" class="text-gray-300 hover:text-avenure-primary" @click="isMenuOpen = false">Produtos</a>
          <a href="#como-contratar" class="text-gray-300 hover:text-avenure-primary" @click="isMenuOpen = false">Como Contratar</a>
          <a href="#contato" class="text-gray-300 hover:text-avenure-primary" @click="isMenuOpen = false">Contato</a>
          <a
            href="#contato"
            class="px-5 py-2.5 rounded-lg bg-avenure-primary text-avenure-dark font-semibold text-center"
            @click="isMenuOpen = false"
          >
            Agendar Reunião
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>
