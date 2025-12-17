<template>
  <div class="text-center mb-8">
    <h1 class="m-0 mb-2 text-2xl font-bold">{{ block.data.name || "姓名" }}</h1>
    <div class="flex justify-center gap-4 text-gray-600 text-sm">
      <span v-if="block.data.title">{{ block.data.title }}</span>
      <span v-if="block.data.phone">{{ block.data.phone }}</span>
      <span v-if="block.data.email">{{ block.data.email }}</span>
      <span v-if="block.data.location">{{ block.data.location }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
/** 个人信息模块渲染组件 */
defineProps<{ block: any }>();
</script>
