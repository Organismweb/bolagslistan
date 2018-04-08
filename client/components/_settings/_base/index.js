import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { color, font } from '../_variables';

injectGlobal`
  ${styledNormalize}
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: ${font.main};
    color: ${color.black};
  }
`;
