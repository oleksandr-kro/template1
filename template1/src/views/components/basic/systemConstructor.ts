import styled from 'styled-components';
import {
  borders,
  color,
  compose,
  flexbox,
  layout,
  padding,
  position,
  space,
  typography,
} from 'styled-system';

import { BoxProps, ButtonProps, ImageProps, InputProps, TextProps } from './types';

export const BoxConstructor = styled.View<BoxProps>(
  compose(space, position, layout, color, borders, flexbox),
);

export const TouchableBoxConstructor = styled.TouchableOpacity<BoxProps>(
  compose(space, position, layout, color, borders, flexbox),
);

export const ButtonConstructor = styled.Button<ButtonProps>({});

export const ImageConstructor = styled.Image<ImageProps>({});

export const InputConstructor = styled.TextInput<InputProps>(compose(padding, color, typography));

export const TextConstructor = styled.Text<TextProps>(compose(color, typography));
