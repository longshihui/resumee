import { BLOCK_TYPES } from "../../constants/resume";
import type { ResumeBlockItem, ResumeBlockBase } from "../../types/resume-base";

export interface PersonalInfoData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
}

export type PersonalBlock = ResumeBlockItem<
  PersonalInfoData,
  typeof BLOCK_TYPES.PERSONAL
>;

export type { ResumeBlockBase };
