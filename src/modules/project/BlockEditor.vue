<template>
  <div class="config-panel__form">
    <t-form label-align="top">
      <t-form-item label="模块标题">
        <t-input v-model="block.title" />
      </t-form-item>
    </t-form>

    <t-divider>项目列表</t-divider>

    <div
      v-for="(item, idx) in block.data.items"
      :key="idx"
      class="config-panel__list-item"
    >
      <t-button
        size="small"
        variant="text"
        theme="danger"
        class="config-panel__delete-btn"
        @click="block.data.items.splice(idx, 1)"
        >删除</t-button
      >
      <t-form label-align="top">
        <t-form-item label="项目名称">
          <t-input v-model="item.name" />
        </t-form-item>
        <t-form-item label="职责角色">
          <t-input v-model="item.role" />
        </t-form-item>
        <t-form-item label="技术栈">
          <t-input v-model="item.stack" />
        </t-form-item>
        <t-form-item label="时间范围">
          <div class="config-panel__date-row">
            <t-input v-model="item.startDate" placeholder="开始时间" />
            <span class="config-panel__date-separator">-</span>
            <t-input v-model="item.endDate" placeholder="结束时间" />
          </div>
        </t-form-item>
        <t-form-item label="项目描述">
          <t-textarea v-model="item.description" />
        </t-form-item>
      </t-form>
    </div>

    <t-button block variant="dashed" @click="addProjectItem">添加项目</t-button>
  </div>
</template>

<script setup lang="ts">
import type { ProjectBlock, ProjectData } from "./types";

const props = defineProps<{ block: ProjectBlock }>();
const block = props.block;

function addProjectItem() {
  const data = block.data as ProjectData;
  if (!data.items) data.items = [];
  data.items.push({
    name: "",
    role: "",
    stack: "",
    startDate: "",
    endDate: "",
    description: "",
    links: [],
  });
}
</script>
