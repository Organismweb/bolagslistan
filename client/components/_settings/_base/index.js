import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { color } from '../_variables';

injectGlobal`
  ${styledNormalize}
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    color: ${color.green};
  }
`;
