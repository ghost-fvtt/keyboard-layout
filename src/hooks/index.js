// SPDX-FileCopyrightText: 2021 Johannes Loher
//
// SPDX-License-Identifier: MIT

import { registerForInitHookEvent } from './init.js';

export function registerForHookEvents() {
  registerForInitHookEvent();
}
