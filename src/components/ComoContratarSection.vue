<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Analisamos sua demanda',
    description: 'Queremos entender o porquê e se há necessidade da utilização dos nossos produtos e serviços.',
  },
  {
    number: '02',
    title: 'Criamos seu Briefing',
    description: 'Montamos seu projeto no qual iremos implementar com todo fluxo de desenvolvimento e treinamento.',
  },
  {
    number: '03',
    title: 'Implantação e Treinamento',
    description: 'Realizamos a implantação e treinamento online ou presencial conforme a necessidade do cliente.',
  },
  {
    number: '04',
    title: 'Acompanhamento',
    description: 'Após o início da utilização, nossa equipe realiza auditorias programadas para acompanharmos.',
  },
]
</script>

<template>
  <section id="como-contratar" class="py-24 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-avenure-primary text-sm font-medium mb-2">✦ Processo</p>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Como contratar a Avenure
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Após o cadastro da sua empresa, nossos especialistas realizam reuniões para definir o que você realmente precisa.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <article
          v-for="(step, index) in steps"
          :key="index"
          class="relative p-6 rounded-2xl bg-avenure-darker/80 border border-white/5 hover:border-avenure-primary/20 transition-all"
        >
          <span class="text-4xl font-bold text-avenure-primary/30 mb-4 block">{{ step.number }}</span>
          <h3 class="text-lg font-semibold text-white mb-2">{{ step.title }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed">{{ step.description }}</p>
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
