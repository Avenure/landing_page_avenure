<script setup lang="ts">
const products = [
  {
    title: 'Criação de Sites',
    description: 'Sites profissionais, institucionais e e-commerce com design moderno.',
    icon: '🌐',
    slug: 'sites',
  },
  {
    title: 'Criação de Aplicativos',
    description: 'Apps nativos e cross-platform para iOS e Android.',
    icon: '📱',
    slug: 'apps',
  },
  {
    title: 'Sistemas sob Medida',
    description: 'ERPs, CRMs e sistemas empresariais para automação.',
    icon: '⚙️',
    slug: 'sistemas',
  },
  {
    title: 'Criação de Dashboards',
    description: 'Painéis visuais para monitorar métricas e tomar decisões baseadas em dados.',
    icon: '📊',
    slug: 'dashboards',
  },
  {
    title: 'Consultoria Tech',
    description: 'Arquitetura, estratégia e escalabilidade digital.',
    icon: '🎯',
    slug: 'consultoria',
  },
]
</script>

<template>
  <section id="servicos" class="py-24 px-6 bg-avenure-darker/50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-avenure-primary text-sm font-medium mb-2">✦ Produtos e Serviços</p>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          O que oferecemos
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Soluções completas em software para impulsionar seu negócio no mundo digital.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <article
          v-for="(product, index) in products"
          :key="index"
          class="group p-6 rounded-2xl bg-avenure-dark/80 border border-white/5 hover:border-avenure-primary/30 transition-all duration-300 hover:shadow-glow flex flex-col"
        >
          <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">{{ product.icon }}</div>
          <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-avenure-primary transition-colors">
            {{ product.title }}
          </h3>
          <p class="text-gray-400 text-sm mb-4 flex-grow">{{ product.description }}</p>
          <a
            href="#contato"
            class="text-avenure-primary text-sm font-medium hover:underline inline-flex items-center gap-1 mt-auto"
          >
            Saiba mais
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </article>
      </div>

      <div class="text-center mt-12">
        <a
          href="#contato"
          class="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-avenure-primary text-avenure-dark font-semibold hover:shadow-glow-lg transition-all"
        >
          Agendar Reunião
        </a>
      </div>
    </div>
  </section>
</template>
