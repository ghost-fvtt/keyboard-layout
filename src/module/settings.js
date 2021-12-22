import { adjustKeycodeDisplayMapping } from './adjust-keycode-display-mapping.js';
import { packageName } from './const.js';
import { keyboardLayouts } from './keyboard-layouts/index.js';

export function registerSettings() {
  game.settings.register(packageName, 'keyboard-layout', {
    name: 'KEYBOARDLAYOUT.SettingsKeyboardLayoutName',
    hint: 'KEYBOARDLAYOUT.SettingsKeyboardLayoutHint',
    scope: 'client',
    config: true,
    default: 'us',
    type: String,
    choices: Object.fromEntries(
      Object.entries(keyboardLayouts).map(([id, keyboardLayout]) => [id, keyboardLayout.i18n]),
    ),
    onChange: _onChangeKeyboardLayout,
  });
}

function _onChangeKeyboardLayout(keyboardLayoutId) {
  adjustKeycodeDisplayMapping(keyboardLayoutId);
  game.keybindings.initialize();
  Object.values(ui.windows)
    .filter((app) => app instanceof KeybindingsConfig)
    .forEach((keybindingsConfig) => keybindingsConfig.render());
}
