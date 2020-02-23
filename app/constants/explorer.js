// @flow

import { isTestnet } from '../../config/is-testnet';

export const ZERO_EXPLORER_BASE_URL = isTestnet()
  ? 'https://chain.so/tx/ZECTEST/'
  : 'https://insight.zerocurrency.io/insight/tx/';
