import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { ResumeBlock } from "../types/resume";
import {
  BLOCK_TYPES,
  DEFAULT_BLOCK_DATA,
  INITIAL_RESUME_DATA,
} from "../constants/resume";

export const useResumeStore = defineStore("resume", () => {
  const blocks = ref<ResumeBlock[]>(
    INITIAL_RESUME_DATA.map((block) => ({
      ...block,
      id: block.id || crypto.randomUUID(),
    }))
  );

  const selectedBlockId = ref<string | null>(null);

  const selectedBlock = computed(() => {
    return blocks.value.find((b) => b.id === selectedBlockId.value) || null;
  });

  function selectBlock(id: string) {
    selectedBlockId.value = id;
  }

  function updateBlockData(id: string, data: any) {
    const block = blocks.value.find((b) => b.id === id);
    if (block) {
      block.data = { ...block.data, ...data };
    }
  }

  /** 根据模块类型返回默认数据（用于新增模块时初始化） */
  function getDefaultDataByType(type: string) {
    const defaultData =
      DEFAULT_BLOCK_DATA[type as keyof typeof DEFAULT_BLOCK_DATA];
    // Deep clone to avoid reference issues
    return defaultData ? JSON.parse(JSON.stringify(defaultData)) : {};
  }

  function addBlock(type: string, title: string) {
    blocks.value.push({
      id: crypto.randomUUID(),
      type: type as ResumeBlock["type"],
      title,
      data: getDefaultDataByType(type),
    } as ResumeBlock);
  }

  function removeBlock(id: string) {
    // 禁止删除个人信息模块
    const index = blocks.value.findIndex((b) => b.id === id);
    if (index !== -1) {
      const block = blocks.value[index];
      if (block && block.type !== BLOCK_TYPES.PERSONAL) {
        blocks.value.splice(index, 1);
        if (selectedBlockId.value === id) {
          selectedBlockId.value = null;
        }
      }
    }
  }

  function moveBlock(fromIndex: number, toIndex: number) {
    // 保证第一个模块（个人信息）不可移动，也不可被移动到其前面
    if (toIndex === 0 || fromIndex === 0) return;

    const element = blocks.value[fromIndex];
    if (element) {
      blocks.value.splice(fromIndex, 1);
      blocks.value.splice(toIndex, 0, element);
    }
  }

  return {
    blocks,
    selectedBlockId,
    selectedBlock,
    selectBlock,
    updateBlockData,
    addBlock,
    removeBlock,
    moveBlock,
  };
});
