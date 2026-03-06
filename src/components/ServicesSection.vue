<script setup lang="ts">
const segments = [
  {
    title: 'Varejo',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    bgColor: 'bg-avenure-segment-cyan/30',
    slug: 'varejo',
  },
  {
    title: 'Restaurante',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=300&fit=crop',
    bgColor: 'bg-avenure-segment-teal/30',
    slug: 'restaurante',
  },
  {
    title: 'Autopeças',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
    bgColor: 'bg-avenure-segment-cyan/30',
    slug: 'autopecas',
  },
  {
    title: 'Farmácia',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop',
    bgColor: 'bg-avenure-segment-indigo/30',
    slug: 'farmacia',
  },
  {
    title: 'Material de Construção',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
    bgColor: 'bg-avenure-segment-teal/30',
    slug: 'construcao',
  },
  {
    title: 'Moda',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop',
    bgColor: 'bg-avenure-segment-blue/30',
    slug: 'moda',
  },
  {
    title: 'Petshop',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
    bgColor: 'bg-avenure-segment-cyan/30',
    slug: 'petshop',
  },
  {
    title: 'Distribuidora',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
    bgColor: 'bg-avenure-segment-indigo/30',
    slug: 'distribuidora',
  },
  {
    title: 'Serviços',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop',
    bgColor: 'bg-avenure-segment-cyan/30',
    slug: 'servicos',
  },
  {
    title: 'Ótica',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop',
    bgColor: 'bg-avenure-segment-indigo/30',
    slug: 'otica',
  },
]

function goToSegment(slug: string) {
  // Navegar para página do segmento ou abrir modal
  window.location.hash = `#segmento-${slug}`
}
</script>

<template>
  <section id="servicos" class="py-24 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 max-w-4xl mx-auto leading-tight">
          Encontre aqui o seu <span class="text-avenure-primary underline decoration-avenure-primary/50 underline-offset-4">segmento</span> e descubra o que a <span class="text-avenure-primary underline decoration-avenure-primary/50 underline-offset-4">Avenure</span> pode fazer pelo seu negócio.
        </h2>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        <article
          v-for="(segment, index) in segments"
          :key="index"
          class="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-avenure-primary/30 transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
          :class="segment.bgColor"
        >
          <!-- Ícone de pasta no canto -->
          <div class="absolute top-3 left-3 z-10 opacity-80">
            <svg class="w-6 h-6 text-avenure-dark" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
            </svg>
          </div>

          <!-- Área da imagem com recorte orgânico -->
          <div class="relative h-32 md:h-40 overflow-hidden">
            <img
              :src="segment.image"
              :alt="segment.title"
              class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
            <!-- Gradiente para transição suave com o fundo -->
            <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <!-- Conteúdo do card -->
          <div class="p-4 pb-5">
            <h3 class="text-base md:text-lg font-semibold text-white mb-3 line-clamp-2">
              {{ segment.title }}
            </h3>
            <button
              type="button"
              class="text-white font-medium text-sm hover:text-avenure-primary transition-colors flex items-center gap-1"
              @click="goToSegment(segment.slug)"
            >
              Saiba mais!
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
