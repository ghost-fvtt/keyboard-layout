// SPDX-FileCopyrightText: 2021 Johannes Loher
// SPDX-FileCopyrightText: 2021 Martin (fohswe#8355), GH: plutoneld
// SPDX-FileCopyrightText: 2021 Max VS (Maximus#6001)
//
// SPDX-License-Identifier: MIT

import { colemak } from './colemak.js';
import { deLatin1 } from './de-latin1.js';
import { dvorak } from './dvorak.js';
import { fr } from './fr.js';
import { svLatin1 } from './sv-latin1.js';
import { us } from './us.js';
import { hu } from './hu.js';

export const keyboardLayouts = {
  colemak,
  deLatin1,
  dvorak,
  fr,
  svLatin1,
  us,
  hu,
};
