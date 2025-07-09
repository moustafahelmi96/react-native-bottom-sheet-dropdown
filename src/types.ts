import { ViewStyle, TextStyle } from "react-native";

export interface DropdownItem {
  label: string;
  value: string;
}

export interface DropdownProps {
  data: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
  selectedOption?: DropdownItem;
  placeholder?: string;
  selectedValue?: string | number;
  style?: ViewStyle;
  dropdownStyle?: ViewStyle;
  mainDropdownInput?: ViewStyle;
  disabled?: boolean;
  searchable?: boolean;
  maxHeight?: number;
  headerTitle?: string;
  showHeader?: boolean;
  rtl?: boolean;
  title?: string;
  titleStyle?: TextStyle;
  selectedValueStyle?: TextStyle;
  placeholderStyle?: TextStyle;
  dropdownModalProps: {
    dropdownProps?: DropdownDataProps;
    dropdownStyles?: DropdownModalStyles;
  }
}

export interface DropdownModalProps {
  visible: boolean;
  onClose: () => void;
  data: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
  selectedOption?: DropdownItem;
  dropdownModalProps: {
    dropdownProps?: DropdownDataProps;
    dropdownStyles?: DropdownModalStyles;
  }
}

export interface DropdownDataProps {
  dropdownTitle: string;
  closeTitle: string;
}

export interface DropdownModalStyles {
  dropdownTitleStyle?: TextStyle;
  closeTitleStyle?: TextStyle;
  optionValueText?: TextStyle;
  selectedOptionText?: TextStyle;
  optionContainerStyle?: ViewStyle;
}

