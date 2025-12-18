import { BLOCK_TYPES } from "../../constants/resume";
import type { ResumeBlockItem } from "../../types/resume-base";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectItem {
  name: string;
  role: string;
  stack: string;
  startDate: string;
  endDate: string;
  description: string;
  links?: ProjectLink[];
}

export interface ProjectData {
  items: ProjectItem[];
}

export type ProjectBlock = ResumeBlockItem<
  ProjectData,
  typeof BLOCK_TYPES.PROJECT
>;
