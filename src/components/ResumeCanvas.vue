<template>
  <div
    id="resume-paper"
    class="w-[210mm] min-h-[297mm] bg-white shadow-lg p-10 box-border relative"
    @click.self="onCanvasClick"
  >
    <div
      v-for="block in store.blocks"
      :key="block.id"
      class="mb-5 p-3 border-2 border-transparent hover:border-gray-200 cursor-pointer transition-colors group"
      :class="{ 'border-blue-600': store.selectedBlockId === block.id }"
      @click="onBlockClick(block.id)"
    >
      <component :is="getRender(block.type)" :block="(block as any)" />
    </div>
  </div>
</template>

<script setup lang="ts">
/** 简历画布：按模块类型渲染对应组件 */
import { useResumeStore } from "../stores/resume";
import { BLOCK_TYPES } from "../constants/resume";
import { BlockRender as PersonalRender } from "../modules/personal";
import { BlockRender as SummaryRender } from "../modules/summary";
import { BlockRender as ExperienceRender } from "../modules/experience";
import { BlockRender as EducationRender } from "../modules/education";
import { BlockRender as ProjectRender } from "../modules/project";
import { useUIStore } from "../stores/ui";

const store = useResumeStore();
const ui = useUIStore();

function onBlockClick(id: string) {
  store.selectBlock(id);
  ui.openContent();
}

const renderMap: Record<string, any> = {
  [BLOCK_TYPES.PERSONAL]: PersonalRender,
  [BLOCK_TYPES.SUMMARY]: SummaryRender,
  [BLOCK_TYPES.EXPERIENCE]: ExperienceRender,
  [BLOCK_TYPES.EDUCATION]: EducationRender,
  [BLOCK_TYPES.PROJECT]: ProjectRender,
} as const;

function getRender(type: string) {
  return renderMap[type] || UnknownRender;
}

const UnknownRender: any = {
  props: ["block"],
  template: `<div><h3 class="border-b-2 border-gray-800 pb-1 mb-4 text-lg uppercase">{{ block.title }}</h3><div class="text-gray-500">(未知的模块类型)</div></div>`,
};

function onCanvasClick() {
  store.selectBlock("");
  ui.closeSidebar();
}
</script>

<style scoped>
/* 
  Tailwind styles are used within the template.
  Scoped styles here can be used for editor-specific overlays if needed.
*/
</style>
