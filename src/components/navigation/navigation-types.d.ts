
export interface NavigationSections {
  [section_name:string]: React.ReactNode;
}

export interface NavigationProps {
  elements: NavigationSections;
  defaultItem?: string;
}