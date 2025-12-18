<template>
  <div class="config-panel">
    <div v-if="ui.sidebarMode === 'content'">
      <div v-if="store.selectedBlock" class="config-panel__content">
        <div class="config-panel__header">
          <h3>{{ store.selectedBlock.title }}</h3>
        </div>

        <PersonalBlockEditor
          v-if="store.selectedBlock.type === BLOCK_TYPES.PERSONAL"
          :block="store.selectedBlock"
        />
        <SummaryBlockEditor
          v-else-if="store.selectedBlock.type === BLOCK_TYPES.SUMMARY"
          :block="store.selectedBlock"
        />
        <ExperienceBlockEditor
          v-else-if="store.selectedBlock.type === BLOCK_TYPES.EXPERIENCE"
          :block="store.selectedBlock"
        />
        <EducationBlockEditor
          v-else-if="store.selectedBlock.type === BLOCK_TYPES.EDUCATION"
          :block="store.selectedBlock"
        />
        <ProjectBlockEditor
          v-else-if="store.selectedBlock.type === BLOCK_TYPES.PROJECT"
          :block="store.selectedBlock"
        />
      </div>
      <div v-else class="config-panel__empty-state">
        请点击左侧简历模块进行编辑
      </div>
    </div>

    <div v-else-if="ui.sidebarMode === 'structure'">
      <div class="config-panel__structure-list">
        <VueDraggable
          v-model="draggableBlocks"
          :animation="150"
          handle=".config-panel__drag-handle"
          @end="onDragEnd"
        >
          <div
            v-for="block in draggableBlocks"
            :key="block.id"
            class="config-panel__structure-item"
            :class="{
              'is-personal': block.type === 'personal',
              'is-active': store.selectedBlockId === block.id,
            }"
            @click="store.selectBlock(block.id)"
          >
            <div
              class="config-panel__drag-handle"
              v-if="block.type !== 'personal'"
            >
              <MoveIcon />
            </div>
            <div class="config-panel__drag-handle disabled" v-else>
              <LockOnIcon />
            </div>
            <span class="config-panel__block-title">{{ block.title }}</span>
            <div
              class="config-panel__item-actions"
              v-if="block.type !== 'personal'"
            >
              <t-button
                shape="circle"
                variant="text"
                size="small"
                @click.stop="store.removeBlock(block.id)"
              >
                <DeleteIcon />
              </t-button>
            </div>
          </div>
        </VueDraggable>

        <div class="config-panel__add-block">
          <t-divider>添加模块</t-divider>
          <div class="config-panel__add-buttons">
            <t-button
              size="small"
              variant="outline"
              @click="store.addBlock('experience', '工作经历')"
              >工作经历</t-button
            >
            <t-button
              size="small"
              variant="outline"
              @click="store.addBlock('education', '教育经历')"
              >教育经历</t-button
            >
            <t-button
              size="small"
              variant="outline"
              @click="store.addBlock('project', '项目经历')"
              >项目经历</t-button
            >
            <t-button
              size="small"
              variant="outline"
              @click="store.addBlock('summary', '个人总结')"
              >个人总结</t-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { useResumeStore } from "../stores/resume";
import { useUIStore } from "../stores/ui";
import { VueDraggable } from "vue-draggable-plus";
import { MoveIcon, LockOnIcon, DeleteIcon } from "tdesign-icons-vue-next";
import { BLOCK_TYPES } from "../constants/resume";
import PersonalBlockEditor from "../modules/personal/BlockEditor.vue";
import SummaryBlockEditor from "../modules/summary/BlockEditor.vue";
import ExperienceBlockEditor from "../modules/experience/BlockEditor.vue";
import EducationBlockEditor from "../modules/education/BlockEditor.vue";
import ProjectBlockEditor from "../modules/project/BlockEditor.vue";

const store = useResumeStore();
const ui = useUIStore();

// 当选择模块时自动显示内容配置侧边栏
watch(
  () => store.selectedBlockId,
  (newId) => {
    if (newId) {
      ui.openContent();
    }
  }
);

// 拖拽排序：保持个人信息模块固定在顶部
const draggableBlocks = computed({
  get: () => store.blocks,
  set: (val) => {
    // 校验“个人信息”是否仍在首位
    if (val.length > 0) {
      const firstBlock = val[0];
      if (firstBlock && firstBlock.type !== BLOCK_TYPES.PERSONAL) {
        // 找出“个人信息”并移回首位
        const personalIndex = val.findIndex(
          (b) => b.type === BLOCK_TYPES.PERSONAL
        );
        if (personalIndex !== -1) {
          const personal = val[personalIndex];
          if (personal) {
            val.splice(personalIndex, 1);
            val.unshift(personal);
          }
        }
      }
    }
    store.blocks = val;
  },
});

function onDragEnd() {
  // 保障“个人信息”始终位于第一个
  const personalIndex = store.blocks.findIndex(
    (b) => b.type === BLOCK_TYPES.PERSONAL
  );
  if (personalIndex !== 0 && personalIndex !== -1) {
    const personal = store.blocks[personalIndex];
    if (personal) {
      store.blocks.splice(personalIndex, 1);
      store.blocks.unshift(personal);
    }
  }
}
</script>

<style scoped>
.config-panel {
  height: 100%;
}

.config-panel__content {
  padding: 16px;
}

.config-panel__header {
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.config-panel__empty-state {
  padding: 40px;
  text-align: center;
  color: #999;
}

.config-panel__structure-list {
  padding: 16px;
}

.config-panel__structure-item {
  display: flex;
  align-items: center;
  padding: 10px;
  background: #f9f9f9;
  margin-bottom: 8px;
  border-radius: 4px;
  border: 1px solid #eee;
  cursor: pointer;
}

.config-panel__structure-item:hover {
  background: #f0f0f0;
}

.config-panel__structure-item.is-active {
  border-color: #0052d9;
  background: #e6f7ff;
}

.config-panel__drag-handle {
  margin-right: 10px;
  cursor: grab;
  color: #999;
  display: flex;
  align-items: center;
}

.config-panel__drag-handle.disabled {
  cursor: default;
  color: #ccc;
}

.config-panel__block-title {
  flex: 1;
  font-weight: 500;
}

.config-panel__item-actions {
  opacity: 0;
  transition: opacity 0.2s;
}

.config-panel__structure-item:hover .config-panel__item-actions {
  opacity: 1;
}

.config-panel__list-item {
  background: #f5f5f5;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 12px;
  position: relative;
}

.config-panel__delete-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1;
}

.config-panel__input-group {
  margin-bottom: 8px;
}

.config-panel__date-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.config-panel__date-separator {
  color: #999;
}

.config-panel__add-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
