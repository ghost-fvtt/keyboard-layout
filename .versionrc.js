// SPDX-FileCopyrightText: 2021 Johannes Loher
//
// SPDX-License-Identifier: MIT

const manifest = {
  filename: 'module.json',
  updater: require('./manifest-version-updater'),
};

const package = {
  filename: 'package.json',
  type: 'json',
};

const packageLock = {
  filename: 'package-lock.json',
  type: 'json',
};

module.exports = {
  bumpFiles: [package, packageLock, manifest],
};
