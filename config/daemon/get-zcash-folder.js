// @flow
import os from 'os';
import path from 'path';
import electron from 'electron'; // eslint-disable-line

export const getZeroFolder = () => {
  const { app } = electron;

  if (os.platform() === 'darwin') {
    return path.join(app.getPath('appData'), 'Zero');
  }

  if (os.platform() === 'linux') {
    return path.join(app.getPath('home'), '.zero');
  }

  return path.join(app.getPath('appData'), 'Zero');
};
