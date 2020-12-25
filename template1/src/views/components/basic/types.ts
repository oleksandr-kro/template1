import {
  BordersProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PaddingProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

/**
 * @desc BoxProps used for only Box.
 * @desc BoxType used for components.
 */
export interface BoxProps
  extends PositionProps,
    ColorProps,
    LayoutProps,
    SpaceProps,
    BordersProps,
    FlexboxProps {}
export type BoxType = Omit<BoxProps, 'color'>;

/**
 * @desc used for only Image.
 */
export interface ImageProps {
  borderRadius?: string | number;
  objectFit?: 'fill' | 'contain' | 'cover' | 'scale-down' | 'none';
  tintColor?: string;
}

/**
 * @desc this type applies Title and Text.
 */
interface GeneralStringProps extends TypographyProps, ColorProps {
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
  textDecoration?: 'line-through' | 'overline' | 'underline';
  textDecorationColor?: string;
  bold?: boolean;
  extraBold?: boolean;
}

/**
 * @desc used for only Input.
 */
export interface InputProps extends PaddingProps, GeneralStringProps {}

/**
 * @desc used for only Text.
 */
export interface TextProps extends GeneralStringProps {}

/**
 * @desc used for only Button.
 */
export interface ButtonProps {}
