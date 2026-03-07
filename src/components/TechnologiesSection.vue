<script setup lang="ts">
const technologies = [
  { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E', slug: 'javascript' },
  { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/3178C6', slug: 'typescript' },
  { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB', slug: 'react' },
  { name: 'Vue.js', logo: 'https://cdn.simpleicons.org/vuedotjs/4FC08D', slug: 'vue' },
  { name: 'Angular', logo: 'https://cdn.simpleicons.org/angular/DD0031', slug: 'angular' },
  { name: 'Svelte', logo: 'https://cdn.simpleicons.org/svelte/FF3E00', slug: 'svelte' },
  { name: 'React Native', logo: 'https://cdn.simpleicons.org/react/61DAFB', slug: 'reactnative' },
  { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933', slug: 'nodejs' },
  { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/000000', slug: 'nextjs' },
  { name: 'Nuxt', logo: '/logos/nuxt.png', slug: 'nuxt' },
  { name: 'NestJS', logo: 'https://cdn.simpleicons.org/nestjs/E0234E', slug: 'nestjs' },
  { name: 'Express', logo: 'https://cdn.simpleicons.org/express/000000', slug: 'express' },
  { name: 'Gatsby', logo: 'https://cdn.simpleicons.org/gatsby/663399', slug: 'gatsby' },
  { name: 'Vite', logo: 'https://cdn.simpleicons.org/vite/646CFF', slug: 'vite' },
  { name: 'Tailwind', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', slug: 'tailwind' },
]
</script>

<template>
  <section class="py-16 px-6 border-t border-b border-white/5 overflow-hidden">
    <p class="text-center text-gray-500 text-sm mb-10">
      Tecnologias JavaScript e TypeScript
    </p>

    <div class="relative w-full overflow-hidden">
      <div class="flex w-max animate-marquee-scroll gap-12 md:gap-16">
        <div
          v-for="(tech, i) in [...technologies, ...technologies]"
          :key="`${tech.slug}-${i}`"
          class="flex items-center gap-3 shrink-0 px-4 py-2 rounded-xl bg-avenure-darker/60 border border-white/5"
        >
          <img
            :src="tech.logo"
            :alt="tech.name"
            class="w-8 h-8 object-contain"
          />
          <span class="text-gray-300 font-medium text-sm whitespace-nowrap">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
