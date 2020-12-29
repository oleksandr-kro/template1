import { StyleSheet } from 'react-native';

import { normalized } from '../../utils';

import colors from './colors';
import fonts from './fonts';
import layout from './layout';
import shadow from './shadow';

export const defaultNavigationOptions = {
  cardShadowEnabled: false,
  cardOverlayEnabled: false,
  cardStyle: {
    backgroundColor: colors.white,
  },
  gestureEnabled: true,
  gestureVelocityImpact: 0.2,
  gestureResponseDistance: {
    horizontal: normalized(20),
    vertical: normalized(30),
  },

  headerTransparent: true,
  // transitionSpec: {},
};

export const scenes = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    padding: normalized(30),
    maxWidth: normalized(375),
    backgroundColor: colors.bgWhite,
    flex:1,
  },
});

export { colors, fonts, layout, shadow };
