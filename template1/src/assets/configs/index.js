import { defaultValue } from '../../utils';

export const apiEndpoint = 'http://34.72.77.34/api/V1/';

export const animations = {
  duration: defaultValue({
    short: 120,
    shorter: 180,
    default: 333,
    long: 600,
  }),
};

export const authentication = {
  verification: {
    codeLength: 4,
    groupLength: 2,
  },

  defaultCountryCode: __DEV__ ? 'UA' : 'SA',
  defaultCallingCode: __DEV__ ? '380' : '966',

  countdownInterval: 3 * 60 * 1000,
};

export const validationRegex = {
  telephoneNumber: /^([0-9]{9,15})$/,
  username: /^([A-Za-z0-9.@_]{4,32})$/,
  password: /^(.{8,32})$/,
  positiveNumber: /^\-?\d+((\.|\,)\d+)?$/,
};

export const config = {
  debounceRequestsInterval: 300,
};
