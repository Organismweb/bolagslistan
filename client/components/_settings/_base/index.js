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
    font-family: ${font.family.main};
    color: ${color.black};
  }
  
  .list {
    &-enter {
      opacity: 0.01;
    }
    &-enter-active {
      opacity: 1;
      transition: opacity 400ms ease;
    }
    &-exit {
      opacity: 1;
      max-height: 60px;
      &.list-open-true {
        max-height: 400px;
      }
    }
    &-exit-active {
      opacity: 0;
      max-height: 0;
      transition: all 400ms ease;
    }
  }
`;
