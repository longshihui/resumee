<template>
  <div class="config-panel">
    <t-tabs v-model="activeTab">
      <t-tab-panel value="content" label="内容配置">
        <div v-if="store.selectedBlock" class="config-panel__content">
          <div class="config-panel__header">
            <h3>{{ store.selectedBlock.title }}</h3>
          </div>

          <!-- Personal Info Form -->
          <div
            v-if="store.selectedBlock.type === 'personal'"
            class="config-panel__form"
          >
            <t-form label-align="top">
              <t-form-item label="姓名">
                <t-input v-model="store.selectedBlock.data.name" />
              </t-form-item>
              <t-form-item label="职位">
                <t-input v-model="store.selectedBlock.data.title" />
              </t-form-item>
              <t-form-item label="邮箱">
                <t-input v-model="store.selectedBlock.data.email" />
              </t-form-item>
              <t-form-item label="电话">
                <t-input v-model="store.selectedBlock.data.phone" />
              </t-form-item>
              <t-form-item label="地点">
                <t-input v-model="store.selectedBlock.data.location" />
              </t-form-item>
            </t-form>
          </div>

          <!-- Summary Form -->
          <div
            v-else-if="store.selectedBlock.type === 'summary'"
            class="config-panel__form"
          >
            <t-form label-align="top">
              <t-form-item label="标题">
                <t-input v-model="store.selectedBlock.title" />
              </t-form-item>
              <t-form-item label="内容">
                <t-textarea
                  v-model="store.selectedBlock.data.content"
                  :autosize="{ minRows: 3, maxRows: 10 }"
                />
              </t-form-item>
            </t-form>
          </div>

          <!-- Experience Form -->
          <div
            v-else-if="store.selectedBlock.type === 'experience'"
            class="config-panel__form"
          >
            <t-form label-align="top">
              <t-form-item label="模块标题">
                <t-input v-model="store.selectedBlock.title" />
              </t-form-item>
            </t-form>

            <t-divider>经历列表</t-divider>

            <div
              v-for="(item, idx) in store.selectedBlock.data.items"
              :key="idx"
              class="config-panel__list-item"
            >
              <t-button
                size="small"
                variant="text"
                theme="danger"
                class="config-panel__delete-btn"
                @click="store.selectedBlock.data.items.splice(idx, 1)"
                >删除</t-button
              >
              <t-input
                v-model="item.company"
                placeholder="公司名称"
                class="config-panel__input-group"
              />
              <t-input
                v-model="item.position"
                placeholder="职位"
                class="config-panel__input-group"
              />
              <div class="config-panel__date-row config-panel__input-group">
                <t-input v-model="item.startDate" placeholder="开始时间" />
                <span class="config-panel__date-separator">-</span>
                <t-input v-model="item.endDate" placeholder="结束时间" />
              </div>
              <t-textarea v-model="item.description" placeholder="工作描述" />
            </div>

            <t-button block variant="dashed" @click="addExperienceItem"
              >添加经历</t-button
            >
          </div>

          <!-- Education Form -->
          <div
            v-else-if="store.selectedBlock.type === 'education'"
            class="config-panel__form"
          >
            <t-form label-align="top">
              <t-form-item label="模块标题">
                <t-input v-model="store.selectedBlock.title" />
              </t-form-item>
            </t-form>

            <t-divider>教育经历</t-divider>

            <div
              v-for="(item, idx) in store.selectedBlock.data.items"
              :key="idx"
              class="config-panel__list-item"
            >
              <t-button
                size="small"
                variant="text"
                theme="danger"
                class="config-panel__delete-btn"
                @click="store.selectedBlock.data.items.splice(idx, 1)"
                >删除</t-button
              >
              <t-input
                v-model="item.school"
                placeholder="学校"
                class="config-panel__input-group"
              />
              <t-input
                v-model="item.major"
                placeholder="专业"
                class="config-panel__input-group"
              />
              <t-input
                v-model="item.degree"
                placeholder="学历"
                class="config-panel__input-group"
              />
              <div class="config-panel__date-row config-panel__input-group">
                <t-input v-model="item.startDate" placeholder="开始时间" />
                <span class="config-panel__date-separator">-</span>
                <t-input v-model="item.endDate" placeholder="结束时间" />
              </div>
            </div>

            <t-button block variant="dashed" @click="addEducationItem"
              >添加教育经历</t-button
            >
          </div>

          <!-- Project Form -->
          <div
            v-else-if="store.selectedBlock.type === 'project'"
            class="config-panel__form"
          >
            <t-form label-align="top">
              <t-form-item label="模块标题">
                <t-input v-model="store.selectedBlock.title" />
              </t-form-item>
            </t-form>

            <t-divider>项目列表</t-divider>

            <div
              v-for="(item, idx) in store.selectedBlock.data.items"
              :key="idx"
              class="config-panel__list-item"
            >
              <t-button
                size="small"
                variant="text"
                theme="danger"
                class="config-panel__delete-btn"
                @click="store.selectedBlock.data.items.splice(idx, 1)"
                >删除</t-button
              >
              <t-input
                v-model="item.name"
                placeholder="项目名称"
                class="config-panel__input-group"
              />
              <t-input
                v-model="item.role"
                placeholder="职责角色"
                class="config-panel__input-group"
              />
              <t-input
                v-model="item.stack"
                placeholder="技术栈"
                class="config-panel__input-group"
              />
              <div class="config-panel__date-row config-panel__input-group">
                <t-input v-model="item.startDate" placeholder="开始时间" />
                <span class="config-panel__date-separator">-</span>
                <t-input v-model="item.endDate" placeholder="结束时间" />
              </div>
              <t-textarea v-model="item.description" placeholder="项目描述" />
            </div>

            <t-button block variant="dashed" @click="addProjectItem"
              >添加项目</t-button
            >
          </div>
        </div>
        <div v-else class="config-panel__empty-state">
          请点击左侧简历模块进行编辑
        </div>
      </t-tab-panel>

      <t-tab-panel value="structure" label="模块排序">
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
      </t-tab-panel>
    </t-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useResumeStore } from "../stores/resume";
import { VueDraggable } from "vue-draggable-plus";
import { MoveIcon, LockOnIcon, DeleteIcon } from "tdesign-icons-vue-next";

const store = useResumeStore();
const activeTab = ref("structure");

// 当选择模块时自动切换到内容配置页签
watch(
  () => store.selectedBlockId,
  (newId) => {
    if (newId) {
      activeTab.value = "content";
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
      if (firstBlock && firstBlock.type !== "personal") {
        // 找出“个人信息”并移回首位
        const personalIndex = val.findIndex((b) => b.type === "personal");
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
  const personalIndex = store.blocks.findIndex((b) => b.type === "personal");
  if (personalIndex !== 0 && personalIndex !== -1) {
    const personal = store.blocks[personalIndex];
    if (personal) {
      store.blocks.splice(personalIndex, 1);
      store.blocks.unshift(personal);
    }
  }
}

function addExperienceItem() {
  if (store.selectedBlock && store.selectedBlock.type === "experience") {
    if (!store.selectedBlock.data.items) store.selectedBlock.data.items = [];
    store.selectedBlock.data.items.push({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  }
}

function addEducationItem() {
  if (store.selectedBlock && store.selectedBlock.type === "education") {
    if (!store.selectedBlock.data.items) store.selectedBlock.data.items = [];
    store.selectedBlock.data.items.push({
      school: "",
      degree: "",
      major: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  }
}

function addProjectItem() {
  if (store.selectedBlock && store.selectedBlock.type === "project") {
    if (!store.selectedBlock.data.items) store.selectedBlock.data.items = [];
    store.selectedBlock.data.items.push({
      name: "",
      role: "",
      stack: "",
      startDate: "",
      endDate: "",
      description: "",
      links: [],
    });
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
