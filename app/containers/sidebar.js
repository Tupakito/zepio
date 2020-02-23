// @flow

import { connect } from 'react-redux';

import { SidebarComponent } from '../components/sidebar';

import type { AppState } from '../types/app-state';

export type MapStateToProps = {|
  zeroNetwork: string,
  embeddedDaemon: boolean,
|};

const mapStateToProps = ({ app }: AppState): MapStateToProps => ({
  zeroNetwork: app.zeroNetwork,
  embeddedDaemon: app.embeddedDaemon,
});

// $FlowFixMe
export const SidebarContainer = connect(
  mapStateToProps,
)(SidebarComponent);
