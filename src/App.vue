<template>
  <t-layout class="app-layout">
    <t-header class="app-layout__header">
      <AppToolbar />
    </t-header>
    <t-layout class="app-layout__content-wrapper">
      <t-content class="app-layout__content">
        <div class="app-layout__canvas-area">
          <ResumeCanvas />
        </div>
      </t-content>
      <t-aside
        v-if="ui.sidebarMode !== 'none'"
        class="app-layout__sidebar"
        width="380px"
      >
        <ConfigPanel />
      </t-aside>
    </t-layout>
  </t-layout>
</template>

<script setup lang="ts">
/** 应用布局：顶部工具栏，中间画布，右侧配置面板 */
import AppToolbar from "./components/AppToolbar.vue";
import ResumeCanvas from "./components/ResumeCanvas.vue";
import ConfigPanel from "./components/ConfigPanel.vue";
import { useUIStore } from "./stores/ui";
const ui = useUIStore();
</script>

<style scoped>
.app-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-layout__header {
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05);
  z-index: 100;
  background-color: var(--td-bg-color-container);
  flex-shrink: 0;
}

.app-layout__content-wrapper {
  flex: 1;
  overflow: hidden;
}

.app-layout__content {
  flex: 1;
  overflow: hidden;
  background-color: var(--td-bg-color-page);
  display: flex;
  flex-direction: column;
}

.app-layout__canvas-area {
  flex: 1;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  padding: 32px;
  background-color: var(
    --td-bg-color-page
  ); /* Grey background for canvas area */
}

.app-layout__sidebar {
  background-color: var(--td-bg-color-container);
  border-left: 1px solid var(--td-component-stroke);
  overflow-y: auto;
  flex-shrink: 0;
}
</style>
