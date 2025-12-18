<template>
  <div class="config-panel__form">
    <t-form label-align="top">
      <t-form-item label="模块标题">
        <t-input v-model="block.title" />
      </t-form-item>
    </t-form>

    <t-divider>经历列表</t-divider>

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
</template>

<script setup lang="ts">
import type { ExperienceBlock, ExperienceData } from "./types";

const props = defineProps<{ block: ExperienceBlock }>();
const block = props.block;

function addExperienceItem() {
  const data = block.data as ExperienceData;
  if (!data.items) data.items = [];
  data.items.push({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  });
}
</script>

