<!--
SPDX-FileCopyrightText: 2021 Johannes Loher

SPDX-License-Identifier: MIT
-->

# Keyboard Layout

[![Checks](https://github.com/ghost-fvtt/keyboard-layout/workflows/Checks/badge.svg)](https://github.com/ghost-fvtt/keyboard-layout/actions)
![Supported Foundry Versions](https://img.shields.io/endpoint?url=https://foundryshields.com/version?url=https://github.com/ghost-fvtt/keyboard-layout/releases/latest/download/module.json)
![Latest Release Download Count](https://img.shields.io/github/downloads/ghost-fvtt/keyboard-layout/latest/module.zip)
[![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fkeyboard-layout&colorB=4aa94a)](https://forge-vtt.com/bazaar#package=keyboard-layout)
[![Foundry Hub Endorsements](https://img.shields.io/endpoint?logoColor=white&url=https%3A%2F%2Fwww.foundryvtt-hub.com%2Fwp-json%2Fhubapi%2Fv1%2Fpackage%2Fkeyboard-layout%2Fshield%2Fendorsements)](https://www.foundryvtt-hub.com/package/keyboard-layout/)
[![REUSE status](https://api.reuse.software/badge/github.com/ghost-fvtt/keyboard-layout)](https://api.reuse.software/info/github.com/ghost-fvtt/keyboard-layout)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-ghostfvtt-00B9FE?logo=kofi)](https://ko-fi.com/ghostfvtt)

A module for [Foundry Virtual Tabletop] that allows users to select their
keyboard layout to be used for keybindings. Supported keyboard layouts:

* US (QWERTY) (this is the default that foundry also uses without this module)
* German (QWERTZ)
* Swedish (QWERTY)
* French (AZERTY)
* Dvorak
* Colemak

## Installation

To install and use Keyboard Layout, simply paste the following URL into the
**Install Module** dialog on the Setup menu of Foundry Virtual Tabletop.

https://github.com/ghost-fvtt/keyboard-layout/releases/latest/download/module.json

## Usage

Simply go to the module settings and choose your desired keyboard layout from
the dropdown menu.

## Development

### Prerequisites

In order to build this module, recent versions of `node` and `npm` are
required. Most likely using `yarn` also works but only `npm` is officially
supported. We recommend using the latest lts version of `node`. If you use `nvm`
to manage your `node` versions, you can simply run

```
nvm install
```

in the project's root directory.

You also need to install the project's dependencies. To do so, run

```
npm install
```

### Building

You can build the project by running

```
npm run build
```

Alternatively, you can run

```
npm run watch
```

to watch for changes and automatically build as necessary.

### Linking the built project to Foundry VTT

In order to provide a fluent development experience, it is recommended to link
the built module to your local Foundry VTT installation's data folder. In
order to do so, first add a file called `foundryconfig.json` to the project root
with the following content:

```
{
  "dataPath": "/absolute/path/to/your/FoundryVTT"
}
```

(if you are using Windows, make sure to use `\` as a path separator instead of
`/`)

Then run

```
npm run link-package
```

On Windows, creating symlinks requires administrator privileges, so
unfortunately you need to run the above command in an administrator terminal for
it to work.

### Adding Support for Additional Keyboard Layouts

To add support for a new keyboard layout, add a module in
`src/keyboard-layouts` for it, analogous to the existing keyboard
layouts. The naming convention should follow the one for keymaps in Linux
(see https://wiki.archlinux.org/title/Linux_console/Keyboard_configuration).
The module needs to export an object of the following form:

```ts
{
  keycodeDisplayMapping?: Record<string, string>,
  keybindingMapping?: Record<string, string>,
  i18n: string
}
```

* `keycodeDisplayMapping` is used to change how certain key codes are
  displayed. It is an object that has key codes as keys and the strings as which
  they should be displayed as values.
* `keybindingMapping` is used to change which key codes keybindings are being
  registered for. It is an object that has key codes as keys and the key codes
  that should actually be used instead as values.
* `i18n` is the i18n key that's being used to show they keyboard layout on the
  settings.

Then simply import this object in `src/keyboard-layouts/index.js` and put
it in the exported object. Also, don't forget to add translations for the i18n
key that has just been added.

## Licensing

This project is being developed under the terms of the
[LIMITED LICENSE AGREEMENT FOR MODULE DEVELOPMENT] for Foundry Virtual Tabletop.

The project itself uses [REUSE] to specify the used licenses. Currently,
everything is licensed under the [MIT] license. More information
(including the copyright holders) can be found in the individual files.

[Foundry Virtual Tabletop]: https://foundryvtt.com/
[LIMITED LICENSE AGREEMENT FOR MODULE DEVELOPMENT]: https://foundryvtt.com/article/license/
[REUSE]: https://reuse.software/
[MIT]: LICENSES/MIT.txt
