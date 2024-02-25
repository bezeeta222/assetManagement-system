<template>
  <UCard
    class="flex-1 bg-gradient-radial from-[#a1bfff] to-[#f8fafc] dark:from-[#203053] dark:to-black border-b dark:border-gray-800">
    <div class="font-medium text-secondary md:text-lg">{{ label }}</div>
    <div class="text-2xl md:text-8xl font-bold tabular-nums">
      {{ value }}
    </div>
  </UCard>
</template>



<script setup lang="ts">
defineProps<{
  label: string
  value: string | number
}>()
</script>
