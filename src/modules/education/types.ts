import { BLOCK_TYPES } from "../../constants/resume";
import type { ResumeBlockItem } from "../../types/resume-base";

export interface EducationItem {
  school: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface EducationData {
  items: EducationItem[];
}

export type EducationBlock = ResumeBlockItem<
  EducationData,
  typeof BLOCK_TYPES.EDUCATION
>;
