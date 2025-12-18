import { BLOCK_TYPES } from "../../constants/resume";
import type { ResumeBlockItem } from "../../types/resume-base";

export interface SummaryData {
  content: string;
}

export type SummaryBlock = ResumeBlockItem<
  SummaryData,
  typeof BLOCK_TYPES.SUMMARY
>;
