export interface ResumeBlock {
  id: string;
  type: string;
  title: string;
  data: Record<string, any>;
}

export interface ResumeState {
  blocks: ResumeBlock[];
  selectedBlockId: string | null;
}

export const BLOCK_TYPES = {
  PERSONAL: 'personal',
  SUMMARY: 'summary',
  EXPERIENCE: 'experience',
  EDUCATION: 'education',
  PROJECT: 'project',
  SKILL: 'skill',
};
