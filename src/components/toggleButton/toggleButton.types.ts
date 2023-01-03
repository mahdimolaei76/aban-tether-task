export interface ToggleButtonPropsTypes {
  onClick: () => void;
  options: { label: string; value: string }[];
  selectedOptions: string;
}
