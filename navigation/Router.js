import React from 'react';
import Welcome from '../src/components/Welcome';
import VPN from '../src/components/VPN';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

const switchNavigation = createSwitchNavigator({
    Welcome,
    VPN,
});

export default createAppContainer(switchNavigation)