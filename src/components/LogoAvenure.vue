<script setup lang="ts">
const props = defineProps<{ class?: string }>()
</script>

<template>
  <img
    src="/logo-avenure.png"
    alt="Avenure"
    :class="props.class"
  />
</template>
