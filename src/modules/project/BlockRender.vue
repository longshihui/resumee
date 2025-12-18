<template>
  <div class="mb-5">
    <h3 class="border-b-2 border-gray-800 pb-1 mb-4 text-lg uppercase">
      {{ block.title }}
    </h3>
    <div v-for="(item, idx) in block.data.items" :key="idx" class="mb-4">
      <div class="flex justify-between mb-1">
        <span class="font-semibold">{{ item.name }}</span>
        <span class="text-sm text-gray-600"
          >{{ item.startDate }} - {{ item.endDate }}</span
        >
      </div>
      <div class="text-sm text-gray-800 mb-1">
        {{ item.role }} · {{ item.stack }}
      </div>
      <p class="text-gray-700 mb-1">{{ item.description }}</p>
      <div class="flex flex-wrap gap-2">
        <a
          v-for="(link, i) in item.links"
          :key="i"
          :href="link.url"
          target="_blank"
          class="text-blue-600 hover:underline text-sm"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectBlock } from "./types";

defineProps<{ block: ProjectBlock }>();
</script>

