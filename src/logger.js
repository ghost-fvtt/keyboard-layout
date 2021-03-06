// SPDX-FileCopyrightText: 2021 Johannes Loher
//
// SPDX-License-Identifier: MIT

import { packageName } from './const.js';

const loggingContext = packageName;
const loggingSeparator = '|';

const getLoggingFunction = (type = 'info') => {
  const log = { debug: console.debug, info: console.info, warning: console.warn, error: console.error }[type];
  return (...data) => log(loggingContext, loggingSeparator, ...data);
};

export const logger = Object.freeze({
  debug: getLoggingFunction('debug'),
  info: getLoggingFunction('info'),
  warn: getLoggingFunction('warning'),
  error: getLoggingFunction('error'),
  getLoggingFunction,
});
