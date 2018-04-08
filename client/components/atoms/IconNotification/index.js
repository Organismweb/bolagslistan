// @flow
import * as React from 'react';
import styled from 'styled-components';
import { color } from '../../_settings/_variables';

type Props = {
  notifications?: number,
  children: React.Node,
};

const IconNotification = (props: Props) => (
  <Container>
    {props.notifications && props.notifications > 0 ? (
      <Notification>
        <span>{props.notifications}</span>
      </Notification>
    ) : null}
    {props.children}
  </Container>
);

IconNotification.defaultProps = {
  notifications: 0,
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
