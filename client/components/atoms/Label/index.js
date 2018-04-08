// @flow

import React from 'react';
import styled from 'styled-components';
import { font, spacing } from '../../_settings/_variables';

type Props = {
  title: string,
};

const Label = (props: Props) => <LabelStyle>{props.title}</LabelStyle>;

const LabelStyle = styled.span`
  display: inline-block;
  background-color: white;
  font-size: ${font.size.sm};
  color: #5f6b7a;
  padding-top: calc(${spacing.xs} / 2);
  padding-bottom: calc(${spacing.xs} / 2);
  padding-left: ${spacing.xs};
  padding-right: ${spacing.xs};
  border-radius: 13px;
  box-shadow: 0 2px 4px 0 rgba(31, 46, 61, 0.06);
  border: solid 1px #dfe3e8;
`;

export default Label;
