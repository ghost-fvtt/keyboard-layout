import { adjustKeycodeDisplayMapping } from '../adjust-keycode-display-mapping.js';
import { packageName } from '../const.js';
import { registerSettings } from '../settings.js';
import { registerClientKeybindingWrappers } from '../wrappers/clientKeybindings.js';

export function registerForInitHookEvent() {
  Hooks.on('init', init);
}

function init() {
  registerSettings();
  adjustKeycodeDisplayMapping(game.settings.get(packageName, 'keyboard-layout'));
  registerClientKeybindingWrappers();
}
