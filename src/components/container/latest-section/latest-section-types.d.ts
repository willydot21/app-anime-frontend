
import { SectionItem } from "../../../services/api/tioanime/api-types";

export interface LatestSectionProps {
  latestItems: SectionItem[];
  section_name: string;
  value?: string;
}