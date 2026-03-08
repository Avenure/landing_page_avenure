<!-- NAO ESTA EM USO POR ENQUANTO -->

<script setup lang="ts">
const stats = [
  {
    value: '+50',
    suffix: '',
    label: 'Projetos entregues',
  },
  {
    value: '+30',
    suffix: '',
    label: 'Clientes atendidos',
  },
  {
    value: '5',
    suffix: '+',
    label: 'Anos de experiência',
  },
  {
    value: '100',
    suffix: '%',
    label: 'Compromisso com qualidade',
  },
]
</script>

<template>
  <section class="py-20 px-6 border-t border-b border-white/5">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="text-center"
        >
          <p class="text-4xl md:text-5xl font-bold text-avenure-primary mb-2">
            {{ stat.value }}<span class="text-avenure-primary/80">{{ stat.suffix }}</span>
          </p>
          <p class="text-gray-400 text-sm md:text-base">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
