// Main entry point for react-native-bottom-sheet-dropdown library
export { default as BottomSheetDropdown } from './BottomSheetDropdown';
export { default } from './BottomSheetDropdown';

// Export types for TypeScript users
export type { 
  DropdownItem, 
  DropdownProps,
  DropdownModalProps,
  DropdownDataProps,
  DropdownModalStyles
} from './types';

// Default values that match the component implementation
export const DropdownDefaults = {
  placeholder: 'Select an option',
  title: '',
  rtl: false,
  dropdownProps: {
    dropdownTitle: 'Select Option',
    closeTitle: 'Close'
  }
} as const;