
export interface ContainerItemInterface {
  name: string;
  id: string;
  poster: string;
  [otherProps: string]: any;
}

export interface ContainerItemProps {
  item: ContainerItemInterface;
  link: string;
  index?: number;
}