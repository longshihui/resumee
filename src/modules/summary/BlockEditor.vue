<template>
  <div class="config-panel__form">
    <t-form label-align="top">
      <t-form-item label="标题">
        <t-input v-model="block.title" />
      </t-form-item>
      <t-form-item label="内容">
        <t-textarea
          v-model="block.data.content"
          :autosize="{ minRows: 3, maxRows: 10 }"
        />
      </t-form-item>
    </t-form>
  </div>
</template>

<script setup lang="ts">
import type { SummaryBlock } from "./types";

defineProps<{ block: SummaryBlock }>();
</script>

