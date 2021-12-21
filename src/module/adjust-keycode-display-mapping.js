import { keyboardLayouts } from './keyboard-layouts/index.js';

const DEFAULT_KEYCODE_DISPLAY_MAPPING = KeyboardManager.KEYCODE_DISPLAY_MAPPING;

/**
 * Adjust {@link KeyboardManager#KEYCODE_DISPLAY_MAPPING} to a given keyboard layout.
 * @param {string} keyboardLayoutName The keyboard layout to use
 */
export function adjustKeycodeDisplayMapping(keyboardLayoutName) {
  const { KEYCODE_DISPLAY_MAPPING = {} } = keyboardLayouts[keyboardLayoutName];
  KeyboardManager.KEYCODE_DISPLAY_MAPPING = foundry.utils.mergeObject(
    DEFAULT_KEYCODE_DISPLAY_MAPPING,
    KEYCODE_DISPLAY_MAPPING,
    {
      inplace: false,
    },
  );
}
