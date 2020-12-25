import styled, { css } from 'styled-components';

import { TouchableBoxConstructor } from '../systemConstructor';

export const TouchableBox = styled(TouchableBoxConstructor)`
  ${() => css``}
`;

TouchableBox.defaultProps = {
  width: '100%',
};
