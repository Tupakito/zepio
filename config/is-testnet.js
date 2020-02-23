// @flow

import electronStore from './electron-store';
import { ZERO_NETWORK, MAINNET } from '../app/constants/zcash-network';

export const isTestnet = () => electronStore.get(ZERO_NETWORK) !== MAINNET;
