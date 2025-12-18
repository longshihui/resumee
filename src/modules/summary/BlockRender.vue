<template>
  <div class="mb-5">
    <h3 class="border-b-2 border-gray-800 pb-1 mb-4 text-lg uppercase">
      {{ block.title }}
    </h3>
    <p class="whitespace-pre-wrap leading-relaxed">{{ block.data.content }}</p>
  </div>
</template>

<script setup lang="ts">
import type { SummaryBlock } from "./types";

defineProps<{ block: SummaryBlock }>();
</script>

