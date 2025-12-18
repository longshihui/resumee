import { BLOCK_TYPES } from "../../constants/resume";
import type { ResumeBlockItem } from "../../types/resume-base";

export interface ExperienceItem {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface ExperienceData {
  items: ExperienceItem[];
}

export type ExperienceBlock = ResumeBlockItem<
  ExperienceData,
  typeof BLOCK_TYPES.EXPERIENCE
>;
