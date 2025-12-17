<template>
  <div class="mb-5">
    <h3 class="border-b-2 border-gray-800 pb-1 mb-4 text-lg uppercase">
      {{ block.title }}
    </h3>
    <div v-for="(item, idx) in block.data.items" :key="idx" class="mb-4">
      <div class="flex justify-between mb-1">
        <span class="font-semibold">{{ item.school }}</span>
        <span class="text-sm text-gray-600"
          >{{ item.startDate }} - {{ item.endDate }}</span
        >
      </div>
      <div class="text-sm text-gray-800">
        {{ item.degree }} - {{ item.major }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/** 教育经历模块渲染组件 */
defineProps<{ block: any }>();
</script>
