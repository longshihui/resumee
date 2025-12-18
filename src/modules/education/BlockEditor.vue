<template>
  <div class="config-panel__form">
    <t-form label-align="top">
      <t-form-item label="模块标题">
        <t-input v-model="block.title" />
      </t-form-item>
    </t-form>

    <t-divider>教育经历</t-divider>

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
</template>

<script setup lang="ts">
import type { EducationBlock, EducationData } from "./types";

const props = defineProps<{ block: EducationBlock }>();
const block = props.block;

function addEducationItem() {
  const data = block.data as EducationData;
  if (!data.items) data.items = [];
  data.items.push({
    school: "",
    degree: "",
    major: "",
    startDate: "",
    endDate: "",
  });
}
</script>

