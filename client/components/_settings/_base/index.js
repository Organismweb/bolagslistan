import { injectGlobal } from 'styled-components';
import variables from '../_variables';

injectGlobal`
  ${variables}
  body {
    color: var(--green);
  }
`;
