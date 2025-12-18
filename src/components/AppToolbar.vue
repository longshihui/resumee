<template>
  <div class="app-toolbar">
    <t-row justify="space-between" align="center" style="height: 100%">
      <t-col>
        <div class="app-toolbar__logo">
          <span class="app-toolbar__title">在线简历</span>
        </div>
      </t-col>
      <t-col>
        <t-space>
          <t-button theme="primary" variant="text">预览</t-button>
          <t-button theme="primary">导出 PDF</t-button>
          <t-button variant="outline" @click="ui.openStructure()"
            >模块排序</t-button
          >
          <t-button variant="outline" @click="ui.closeSidebar()"
            >隐藏侧边栏</t-button
          >
        </t-space>
      </t-col>
    </t-row>
  </div>
</template>

<script setup lang="ts">
/** 工具栏：包含预览与导出操作 */
import { useUIStore } from "../stores/ui";
const ui = useUIStore();
</script>

<style scoped>
.app-toolbar {
  height: 100%;
  padding: 0 24px;
}

.app-toolbar__logo {
  display: flex;
  align-items: center;
}

.app-toolbar__title {
  font-size: 18px;
  font-weight: 700;
  color: var(--td-text-color-primary);
}
</style>
