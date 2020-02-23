// @flow
import fs from 'fs';
import path from 'path';
import { getZeroFolder } from './get-zcash-folder';

const ZERO_PID_FILE = 'zerod.pid';

export const getDaemonProcessId = (zeroPath?: string) => {
  try {
    const myPath = zeroPath || getZeroFolder();
    const buffer = fs.readFileSync(path.join(myPath, ZERO_PID_FILE));
    const pid = Number(buffer.toString().trim());
    return pid;
  } catch (err) {
    return null;
  }
};
