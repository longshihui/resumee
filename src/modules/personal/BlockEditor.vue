<template>
  <div class="config-panel__form">
    <t-form label-align="top">
      <t-form-item label="姓名">
        <t-input v-model="block.data.name" />
      </t-form-item>
      <t-form-item label="职位">
        <t-input v-model="block.data.title" />
      </t-form-item>
      <t-form-item label="邮箱">
        <t-input v-model="block.data.email" />
      </t-form-item>
      <t-form-item label="电话">
        <t-input v-model="block.data.phone" />
      </t-form-item>
      <t-form-item label="地点">
        <t-input v-model="block.data.location" />
      </t-form-item>
    </t-form>
  </div>
</template>

<script setup lang="ts">
import type { PersonalBlock } from "./types";

const props = defineProps<{ block: PersonalBlock }>();
const block = props.block;
</script>
