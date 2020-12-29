import { StyleSheet } from 'react-native';

import { defaultValue, normalized } from '../../utils';

export default {
  tabBar: {
    height: normalized(82),
  },

  paddings: defaultValue({
    narrow: normalized(5),
    thin: normalized(10),
    default: normalized(15),
    thick: normalized(20),
    double: normalized(25),
    //
    inputVertical: normalized(13),
    avoidingHeader: normalized(50),
    avoidingHeaderSticked: normalized(108),
    avoidingTabBar: normalized(90),
  }),

  margins: defaultValue({
    narrow: normalized(4),
    thin: normalized(8),
    default: normalized(16),
    thick: normalized(24),
    double: normalized(32),
  }),

  border: defaultValue({
    hairline: StyleSheet.hairlineWidth,
    line: normalized(1.5),
  }),

  radius: defaultValue({
    narrow: normalized(4),
    thin: normalized(9),
    default: normalized(25),
  }),

  icons: defaultValue({
    small: normalized(13),
    default: normalized(18),
    large: normalized(32),
    huge: normalized(70),

    bubble: normalized(32),
  }),
};
