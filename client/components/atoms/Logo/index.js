import React from 'react';
import styled from 'styled-components';
import LogoSvg from '../../../assets/logo.svg';

const Logo = () => (
  <LogoStyles>
    <LogoSvg />
  </LogoStyles>
);

const LogoStyles = styled.div`
  width: 100px;
`;

export default Logo;
