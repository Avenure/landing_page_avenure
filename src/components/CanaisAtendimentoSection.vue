<script setup lang="ts">
const channels = [
  {
    title: 'E-mail',
    subtitle: 'contato@avenure.com.br',
    description: 'Envie um e-mail e nossa equipe atenderá sua solicitação. Tempo de resposta em até 24h.',
    icon: '✉️',
  },
  {
    title: 'WhatsApp',
    subtitle: 'Atendimento 24h',
    description: 'Inicie uma conversa com nossa equipe. Resposta rápida para dúvidas e orçamentos.',
    icon: '💬',
  },
  {
    title: 'Agendar Reunião',
    subtitle: 'Online ou presencial',
    description: 'Agende uma reunião para discutir seu projeto. Horário comercial.',
    icon: '📅',
  },
]
</script>

<template>
  <section class="py-24 px-6 bg-avenure-darker/50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-avenure-primary text-sm font-medium mb-2">✦ Canais de Atendimento</p>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Suporte aos Clientes Avenure
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Oferecemos canais de atendimento humanizado com nossa equipe de especialistas.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <article
          v-for="(channel, index) in channels"
          :key="index"
          class="p-6 rounded-2xl bg-avenure-dark/80 border border-white/5 hover:border-avenure-primary/20 transition-all"
        >
          <div class="text-3xl mb-4">{{ channel.icon }}</div>
          <h3 class="text-lg font-semibold text-white mb-1">{{ channel.title }}</h3>
          <p class="text-avenure-primary text-sm font-medium mb-3">{{ channel.subtitle }}</p>
          <p class="text-gray-400 text-sm leading-relaxed">{{ channel.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
