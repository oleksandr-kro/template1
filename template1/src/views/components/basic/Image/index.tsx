import styled, { css } from 'styled-components';

import { ImageConstructor } from '../systemConstructor';

export const Image = styled(ImageConstructor)`
  ${props => css`
    ${props.objectFit && `object-fit: ${props.objectFit};`}
    ${props.tintColor && `tint-color: ${props.tintColor};`}
    width: 100%;
    height: 100%;
  `}
`;

Image.defaultProps = {};
