import { adjustKeycodeDisplayMapping } from './adjust-keycode-display-mapping.js';
import { packageName } from './const.js';
import { keyboardLayouts } from './keyboard-layouts/index.js';

export function registerSettings() {
  game.settings.register(packageName, 'keyboard-layout', {
    name: 'KEYBOARDLAYOUT.SettingsKeyboardLayoutName',
    hint: 'KEYBOARDLAYOUT.SettingsKeyboardLayoutHint',
    scope: 'client',
    config: true,
    default: 'QWERTY',
    type: String,
    choices: Object.fromEntries(Object.keys(keyboardLayouts).map((keyboardLayout) => [keyboardLayout, keyboardLayout])),
    onChange: _onChangeKeyboardLeyout,
  });
}

function _onChangeKeyboardLeyout(keyboardLayoutName) {
  adjustKeycodeDisplayMapping(keyboardLayoutName);
  game.keybindings.initialize();
  Object.values(ui.windows)
    .filter((app) => app instanceof KeybindingsConfig)
    .forEach((keybindingsConfig) => keybindingsConfig.render());
}
