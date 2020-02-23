// @flow

import path from 'path';
import os from 'os';

import { app } from '../electron'; // eslint-disable-line

export const locateZeroConf = () => {
  if (os.platform() === 'darwin') {
    return path.join(app.getPath('appData'), 'Zero', 'zero.conf');
  }

  if (os.platform() === 'linux') {
    return path.join(app.getPath('home'), '.zero', 'zero.conf');
  }

  return path.join(app.getPath('appData'), 'Zero', 'zero.conf');
};
