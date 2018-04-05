import { injectGlobal } from 'styled-components';

injectGlobal`
  :root {
    --purple: purple;
    --green: green;
    --light-grey: grey;
    --white: white;
    --black: black;
  }
  body {
    color: var(--green);
  }
`;
