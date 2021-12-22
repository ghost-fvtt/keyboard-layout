// SPDX-FileCopyrightText: 2021 Johannes Loher
//
// SPDX-License-Identifier: MIT

import { packageName } from '../const.js';
import { keyboardLayouts } from '../keyboard-layouts/index.js';
import { logger } from '../logger.js';

export function registerClientKeybindingWrappers() {
  const target = 'ClientKeybindings.prototype.initialize';
  try {
    libWrapper.register(packageName, target, initialize, 'WRAPPER');
  } catch (e) {
    logger.warn(`Failed to override ${target}, some things might not work correctly:`, e);
  }
}

let initialActions = null;

function initialize(wrapped) {
  if (initialActions === null) {
    initialActions = this.actions;
  }

  for (const [, action] of initialActions) {
    action.editable = action.editable.map(_mapKeyCodeInBinding);
    action.uneditable = action.uneditable.map(_mapKeyCodeInBinding);
  }

  wrapped.call(this);
}

/**
 * Map the key of a binding according to the selected keyboard layout.
 * @param {{key: string, modifiers: Array<string>}} binding The binding for which to map the key
 * @returns {{key: string, modifiers: Array<string>}} The mapped binding
 */
function _mapKeyCodeInBinding(binding) {
  return { ...binding, key: _mapKeyCode(binding.key) };
}

/**
 * Map a key code according to the selected keyboard layout.
 * @param {string} keyCode The original key code
 * @returns {string} The mapped key code
 */
function _mapKeyCode(keyCode) {
  const keyboardLayoutId = game.settings.get(packageName, 'keyboard-layout');
  return keyboardLayouts[keyboardLayoutId].keybindingMapping?.[keyCode] ?? keyCode;
}
