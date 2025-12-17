import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { type ResumeBlock, BLOCK_TYPES } from "../types/resume";

export const useResumeStore = defineStore("resume", () => {
  const blocks = ref<ResumeBlock[]>([
    {
      id: "personal-info",
      type: BLOCK_TYPES.PERSONAL,
      title: "个人信息",
      data: {
        name: "张三",
        title: "前端工程师",
        email: "zhangsan@example.com",
        phone: "13800138000",
        location: "北京",
      },
    },
    {
      id: crypto.randomUUID(),
      type: BLOCK_TYPES.SUMMARY,
      title: "个人总结",
      data: {
        content: "热爱编程，熟悉 Vue.js, TypeScript...",
      },
    },
    {
      id: crypto.randomUUID(),
      type: BLOCK_TYPES.EXPERIENCE,
      title: "工作经历",
      data: {
        items: [
          {
            company: "某某科技公司",
            position: "高级前端工程师",
            startDate: "2020-01",
            endDate: "至今",
            description: "负责公司核心产品的开发与维护...",
          },
        ],
      },
    },
    {
      id: crypto.randomUUID(),
      type: BLOCK_TYPES.EDUCATION,
      title: "教育经历",
      data: {
        items: [
          {
            school: "某某大学",
            degree: "本科",
            major: "计算机科学与技术",
            startDate: "2016-09",
            endDate: "2020-06",
          },
        ],
      },
    },
    {
      id: crypto.randomUUID(),
      type: BLOCK_TYPES.PROJECT,
      title: "项目经历",
      data: {
        items: [
          {
            name: "在线简历编辑器",
            role: "前端负责人",
            stack: "Vue 3, TypeScript, TDesign",
            startDate: "2024-03",
            endDate: "2024-12",
            description:
              "负责整体架构设计与核心模块开发，提升编辑体验与性能。",
            links: [{ label: "Github", url: "https://example.com" }],
          },
        ],
      },
    },
  ]);

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
    switch (type) {
      case BLOCK_TYPES.SUMMARY:
        return { content: "" };
      case BLOCK_TYPES.EXPERIENCE:
        return {
          items: [
            {
              company: "",
              position: "",
              startDate: "",
              endDate: "",
              description: "",
            },
          ],
        };
      case BLOCK_TYPES.EDUCATION:
        return {
          items: [
            {
              school: "",
              degree: "",
              major: "",
              startDate: "",
              endDate: "",
            },
          ],
        };
      case BLOCK_TYPES.PROJECT:
        return {
          items: [
            {
              name: "",
              role: "",
              stack: "",
              startDate: "",
              endDate: "",
              description: "",
              links: [],
            },
          ],
        };
      default:
        return {};
    }
  }

  function addBlock(type: string, title: string) {
    blocks.value.push({
      id: crypto.randomUUID(),
      type,
      title,
      data: getDefaultDataByType(type),
    });
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
