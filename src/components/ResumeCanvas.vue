<template>
  <div
    id="resume-paper"
    class="w-[210mm] min-h-[297mm] bg-white shadow-lg p-10 box-border relative"
    @click.self="store.selectBlock('')"
  >
    <div
      v-for="block in store.blocks"
      :key="block.id"
      class="mb-5 p-3 border-2 border-transparent hover:border-gray-200 cursor-pointer transition-colors group"
      :class="{ 'border-blue-600': store.selectedBlockId === block.id }"
      @click="store.selectBlock(block.id)"
    >
      <PersonalInfoBlock v-if="block.type === 'personal'" :block="block" />
      <SummaryBlock v-else-if="block.type === 'summary'" :block="block" />
      <ExperienceBlock v-else-if="block.type === 'experience'" :block="block" />
      <EducationBlock v-else-if="block.type === 'education'" :block="block" />
      <ProjectBlock v-else-if="block.type === 'project'" :block="block" />
      <div v-else>
        <h3 class="border-b-2 border-gray-800 pb-1 mb-4 text-lg uppercase">
          {{ block.title }}
        </h3>
        <div class="text-gray-500">(未知的模块类型)</div>
      </div>
      
      <!-- Hover indicator or actions could go here if needed, keeping it clean for now -->
    </div>
  </div>
</template>

<script setup lang="ts">
/** 简历画布：按模块类型渲染对应组件 */
import { useResumeStore } from "../stores/resume";
import PersonalInfoBlock from "./blocks/PersonalInfoBlock.vue";
import SummaryBlock from "./blocks/SummaryBlock.vue";
import ExperienceBlock from "./blocks/ExperienceBlock.vue";
import EducationBlock from "./blocks/EducationBlock.vue";
import ProjectBlock from "./blocks/ProjectBlock.vue";

const store = useResumeStore();
</script>

<style scoped>
/* 
  Tailwind styles are used within the template.
  Scoped styles here can be used for editor-specific overlays if needed.
*/
</style>
