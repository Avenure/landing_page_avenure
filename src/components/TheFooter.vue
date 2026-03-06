<script setup lang="ts">
import LogoAvenure from './LogoAvenure.vue'
</script>

<template>
  <footer class="border-t border-white/5 py-12 px-6">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="flex items-center gap-2">
        <LogoAvenure class="w-8 h-8 text-avenure-primary" />
        <span class="text-white font-semibold">avenure</span>
        <span class="text-gray-500 text-sm hidden sm:inline">| Tecnologia Transparente.</span>
      </div>
      <div class="flex items-center gap-6 text-gray-400 text-sm">
        <a href="#servicos" class="hover:text-avenure-primary transition-colors">Serviços</a>
        <a href="#contato" class="hover:text-avenure-primary transition-colors">Contato</a>
        <span>© {{ new Date().getFullYear() }} Avenure</span>
      </div>
    </div>
  </footer>
</template>