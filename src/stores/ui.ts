import { defineStore } from "pinia";
import { ref } from "vue";

export type SidebarMode = "none" | "content" | "structure";

export const useUIStore = defineStore("ui", () => {
  const sidebarMode = ref<SidebarMode>("none");

  function openContent() {
    sidebarMode.value = "content";
  }

  function openStructure() {
    sidebarMode.value = "structure";
  }

  function closeSidebar() {
    sidebarMode.value = "none";
  }

  return { sidebarMode, openContent, openStructure, closeSidebar };
});

