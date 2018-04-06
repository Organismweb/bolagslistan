// @flow

import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEye, faBell, faExclamationCircle } from '@fortawesome/fontawesome-pro-light';
import { color } from '../../_settings/_variables';

type Props = {
  notifications: number,
  icon: string,
};

const renderIcon = (icon: string) => {
  if (icon === 'eye') {
    return <FontAwesomeIcon icon={faEye} color={color.darkPurple} size="lg" />;
  } else if (icon === 'bell') {
    return <FontAwesomeIcon icon={faBell} color={color.darkPurple} size="lg" />;
  }
  return <FontAwesomeIcon icon={faExclamationCircle} color={color.red} size="lg" />;
};

const IconNotification = (props: Props) => (
  <Container>
    {props.notifications > 0 ? <Notification>{props.notifications}</Notification> : null}
    {renderIcon(props.icon)}
  </Container>
);

const Container = styled.div`
  position: relative;
`;

const Notification = styled.span`
  display: inline-block;
  position: absolute;
  top: -5px;
  right: -5px;
  width: 16px;
  height: 16px;
  background-color: ${color.red};
  border-radius: 50%;
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  color: white;
  user-select: none;
`;

IconNotification.defaultProps = {
  notifications: 0,
  icon: '',
};

export default IconNotification;
