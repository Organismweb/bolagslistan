import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/fontawesome-pro-solid';

const Spinner = () => (
  <SpinnerContainer>
    <SpinnerIcon>
      <FontAwesomeIcon icon={faSpinner} />
    </SpinnerIcon>
    <SpinnerText>Laddar Bolagslistan</SpinnerText>
  </SpinnerContainer>
);

const spinnerAnimation = keyframes`
  from {
    transform: rotate(0);
  } 
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

const SpinnerIcon = styled.span`
  animation: ${spinnerAnimation} 2s linear infinite;
  margin-bottom: 15px;
`;

const SpinnerText = styled.span`
  color: black;
  font-size: 14px;
`;

export default Spinner;
