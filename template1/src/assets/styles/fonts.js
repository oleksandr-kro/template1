import { StyleSheet } from 'react-native';

import { normalized } from '../../utils';
import colors from './colors';

const defaultFont = {
  fontFamily: 'Inter-Regular',

  includeFontPadding: false,
  textAlignVertical: 'center',

  color: colors.black.default,
};

export default StyleSheet.create({
  size8: {
    ...defaultFont,
    fontSize: normalized(8),
    lineHeight: normalized(11),
    minHeight: normalized(11),
  },

  size10: {
    ...defaultFont,
    fontSize: normalized(10),
    lineHeight: normalized(14),
    minHeight: normalized(14),
  },

  size12: {
    ...defaultFont,
    fontSize: normalized(12),
    lineHeight: normalized(17),
    minHeight: normalized(17),
  },

  size14: {
    ...defaultFont,
    fontSize: normalized(14),
    lineHeight: normalized(20),
    minHeight: normalized(20),
  },

  size15: {
    ...defaultFont,
    fontSize: normalized(15),
    lineHeight: normalized(22),
    minHeight: normalized(22),
    // fontFamily: 'Roboto',
  },

  size16: {
    ...defaultFont,
    fontSize: normalized(16),
    lineHeight: normalized(23),
    minHeight: normalized(23),
  },

  size18: {
    ...defaultFont,
    fontSize: normalized(18),
    lineHeight: normalized(26),
    minHeight: normalized(26),
  },

  size24: {
    ...defaultFont,
    fontSize: normalized(24),
    lineHeight: normalized(28),
    minHeight: normalized(28),
  },

  size36: {
    ...defaultFont,
    fontSize: normalized(36),
    lineHeight: normalized(52),
    minHeight: normalized(52),
  },

  light: {
    // fontFamily: 'Quicksand-Light',
  },

  regular: {
    // fontFamily: 'Quicksand-Regular',
  },

  medium: {
    // fontFamily: 'Quicksand-Medium',
  },

  semibold: {
    // fontFamily: 'Quicksand-SemiBold',
  },

  bold: {
    // fontFamily: 'Quicksand-Bold',
  },
});

//	fs	lh
//	8		11
//	9		13
//	10	14
//	11	16
//	12	17
//	13	19
//	14	20
//	15	22
//	16	23
//	17	24
//	18	26
//	19	27
//	20	29
//	21	30
//	22	32
//	23	33
//	24	34
//	25	36
//	26	37
//	27	39
//	28	40
//	29	42
//	30	43
//	31	44
//	32	46
//	33	47
//	34	49
//	35	50
//	36	52
