<script setup lang="ts">
const props = defineProps<{ class?: string }>()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="props.class"
  >
    <!-- Logo "A" com linhas fluidas - perna esquerda -->
    <path d="M14 42 L24 6 L34 42" />
    <!-- Barra horizontal fluida -->
    <path d="M18 30 Q24 28 30 30" />
  </svg>
</template>
