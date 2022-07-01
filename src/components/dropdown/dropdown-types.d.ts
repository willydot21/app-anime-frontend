
export interface AppDropdownProps {
  options: string[];
  name: string;
  externalState?:[string, React.Dispatch<React.SetStateAction<string>>];
}