import styled, { css } from 'styled-components';

import { BoxConstructor } from '../systemConstructor';

export const Box = styled(BoxConstructor)`
  ${() => css``}
`;

Box.defaultProps = {
  width: '100%',
};
