// Main entry point for react-native-bottom-sheet-dropdown library
export { default as BottomSheetDropdown } from './BottomSheetDropdown';
export { default } from './BottomSheetDropdown';

// Export types for TypeScript users
export type { 
  DropdownItem, 
  DropdownProps 
} from './types';

// Optional: Export any additional utilities or constants
export const DropdownDefaults = {
  placeholder: 'Select an option',
  maxHeight: 400,
  animationDuration: 300,
  headerTitle: 'Select Option',
};

// Version info (optional)
export const VERSION = '1.0.0';