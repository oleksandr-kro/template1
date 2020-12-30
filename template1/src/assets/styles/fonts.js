import { StyleSheet } from 'react-native';

import { normalized } from '../../utils';
import colors from './colors';

const interFont = {
  fontFamily: 'Inter-Regular',

  includeFontPadding: false,
  textAlignVertical: 'center',

  color: colors.black.default,
};

const robotoFont = {
  fontFamily: 'Roboto-Regular',

  includeFontPadding: false,
  textAlignVertical: 'center',

  color: colors.black.default,
};

export default StyleSheet.create({
  size8: {
    ...robotoFont,
    fontSize: normalized(8),
    lineHeight: normalized(11),
    minHeight: normalized(11),
  },

  size10: {
    ...robotoFont,
    fontSize: normalized(10),
    lineHeight: normalized(14),
    minHeight: normalized(14),
  },

  size12: {
    ...robotoFont,
    fontSize: normalized(12),
    lineHeight: normalized(17),
    minHeight: normalized(17),
  },

  size13: {
    ...robotoFont,
    fontSize: normalized(13),
    lineHeight: normalized(18),
    minHeight: normalized(18),
  },

  size14: {
    ...robotoFont,
    fontSize: normalized(14),
    lineHeight: normalized(20),
    minHeight: normalized(20),
  },

  size15: {
    ...interFont,
    fontSize: normalized(15),
    lineHeight: normalized(20),
    minHeight: normalized(20),
  },

  size16: {
    ...interFont,
    fontSize: normalized(16),
    lineHeight: normalized(23),
    minHeight: normalized(23),
  },

  size18: {
    ...interFont,
    fontSize: normalized(18),
    lineHeight: normalized(26),
    minHeight: normalized(26),
  },

  size22: {
    ...interFont,
    fontSize: normalized(22),
    lineHeight: normalized(28),
    minHeight: normalized(28),
  },

  size24: {
    ...interFont,
    fontSize: normalized(24),
    lineHeight: normalized(28),
    minHeight: normalized(28),
  },

  size36: {
    ...interFont,
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
