export const BLOCK_TYPES = {
  PERSONAL: 'personal',
  SUMMARY: 'summary',
  EXPERIENCE: 'experience',
  EDUCATION: 'education',
  PROJECT: 'project',
  SKILL: 'skill',
} as const;

export const DEFAULT_BLOCK_DATA = {
  [BLOCK_TYPES.SUMMARY]: { content: "" },
  [BLOCK_TYPES.EXPERIENCE]: {
    items: [
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
  },
  [BLOCK_TYPES.EDUCATION]: {
    items: [
      {
        school: "",
        degree: "",
        major: "",
        startDate: "",
        endDate: "",
      },
    ],
  },
  [BLOCK_TYPES.PROJECT]: {
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
  },
};

export const INITIAL_RESUME_DATA = [
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
    type: BLOCK_TYPES.SUMMARY,
    title: "个人总结",
    data: {
      content: "热爱编程，熟悉 Vue.js, TypeScript...",
    },
  },
  {
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
];
