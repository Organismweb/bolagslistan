// @flow
import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEye, faBell, faExclamationCircle } from '@fortawesome/fontawesome-pro-solid';
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
    {props.notifications > 0 ? (
      <Notification>
        <span>{props.notifications}</span>
      </Notification>
    ) : null}
    {renderIcon(props.icon)}
  </Container>
);

IconNotification.defaultProps = {
  notifications: 0,
  icon: '',
};

const Container = styled.div`
  position: relative;
  padding: 5px;
`;

const Notification = styled.div`
  display: inline-block;
  position: absolute;
  top: -2px;
  right: -2px;
  width: 16px;
  height: 16px;
  background-color: ${color.red};
  border-radius: 50%;
  text-align: center;
  font-size: 11px;
  color: white;
  user-select: none;
  span {
    vertical-align: middle;
    line-height: 1;
  }
`;

export default IconNotification;
