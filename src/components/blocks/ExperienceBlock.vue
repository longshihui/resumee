<template>
  <div class="mb-5">
    <h3 class="border-b-2 border-gray-800 pb-1 mb-4 text-lg uppercase">
      {{ block.title }}
    </h3>
    <div v-for="(item, idx) in block.data.items" :key="idx" class="mb-4">
      <div class="flex justify-between mb-1">
        <span class="font-semibold">{{ item.company }}</span>
        <span class="text-sm text-gray-600"
          >{{ item.startDate }} - {{ item.endDate }}</span
        >
      </div>
      <div class="text-sm text-gray-800 mb-1">{{ item.position }}</div>
      <p class="text-gray-700">{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
/** 工作经历模块渲染组件 */
defineProps<{ block: any }>();
</script>
