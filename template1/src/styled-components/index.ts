import * as styledComponents from 'styled-components/native';

import { theme, ThemeInterface } from './theme';

const styled = (styledComponents as unknown) as styledComponents.ReactNativeThemedStyledComponentsModule<
  ThemeInterface
>;

const { css, ThemeProvider, ThemeConsumer, ThemeContext } = styled;

export { css, ThemeProvider, ThemeConsumer, ThemeContext, theme };

export const useTheme = (): ThemeInterface => styled.useTheme();

export default styled.default;
