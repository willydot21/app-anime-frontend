
import { ContainerItemInterface } from "../../container/container-item/container-item-types";

export interface AnimeScrollSectionProps {
  section: string;
  items: Array<ContainerItemInterface>;
  link?: string;
}