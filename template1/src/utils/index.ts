export * from './hooks';
export * from './cases';
export * from './scale';

import { PixelRatio, Dimensions, LayoutAnimation } from 'react-native';

export const { width, height } = Dimensions.get('screen');

const templateWidth = 375;
const templateHeight = 812;
const widthRatio = width / templateWidth;

export const normalized = (value) =>
  PixelRatio.roundToNearestPixel(value * widthRatio);

export const transparentColor = (color = '#888', transparency = 0) =>
  `#${
    color.length < 7
      ? Array.from(color.slice(1))
          .map((i) => `${i}${i}`)
          .join('')
      : color.slice(1)
  }${Math.round((transparency / 100) * 255)
    .toString(16)
    .padStart(2, '0')}`.slice(0, 9);

export const defaultValue = (object) =>
  Object.defineProperty(
    new Proxy(object, {
      // for nonexistent properties:
      get: (target, property) =>
        property in target ? target[property] : object.default,
    }),
    Symbol.toPrimitive,
    {
      // converting object to default value:
      value: () => object.default,
    },
  );

