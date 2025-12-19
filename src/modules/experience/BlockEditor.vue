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
      <t-form label-align="top">
        <t-form-item label="公司名称">
          <t-input v-model="item.company" />
        </t-form-item>
        <t-form-item label="职位">
          <t-input v-model="item.position" />
        </t-form-item>
        <t-form-item label="时间范围">
          <div class="config-panel__date-row">
            <t-input v-model="item.startDate" placeholder="开始时间" />
            <span class="config-panel__date-separator">-</span>
            <t-input v-model="item.endDate" placeholder="结束时间" />
          </div>
        </t-form-item>
        <t-form-item label="工作描述">
          <t-textarea v-model="item.description" />
        </t-form-item>
      </t-form>
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
