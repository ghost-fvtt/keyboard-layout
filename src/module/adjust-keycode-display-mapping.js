import { keyboardLayouts } from './keyboard-layouts/index.js';

const DEFAULT_KEYCODE_DISPLAY_MAPPING = KeyboardManager.KEYCODE_DISPLAY_MAPPING;

/**
 * Adjust {@link KeyboardManager#KEYCODE_DISPLAY_MAPPING} to a given keyboard layout.
 * @param {string} keyboardLayoutId The id of the keyboard layout to use
 */
export function adjustKeycodeDisplayMapping(keyboardLayoutId) {
  const { keycodeDisplayMapping = {} } = keyboardLayouts[keyboardLayoutId];
  KeyboardManager.KEYCODE_DISPLAY_MAPPING = foundry.utils.mergeObject(
    DEFAULT_KEYCODE_DISPLAY_MAPPING,
    keycodeDisplayMapping,
    {
      inplace: false,
    },
  );
}
