import type { PersonalBlock } from "../modules/personal/types";
import type { SummaryBlock } from "../modules/summary/types";
import type { ExperienceBlock } from "../modules/experience/types";
import type { EducationBlock } from "../modules/education/types";
import type { ProjectBlock } from "../modules/project/types";

export type ResumeBlock =
  | PersonalBlock
  | SummaryBlock
  | ExperienceBlock
  | EducationBlock
  | ProjectBlock;
