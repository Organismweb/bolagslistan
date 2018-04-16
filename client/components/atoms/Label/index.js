// @flow

import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { font, spacing } from '../../_settings/_variables';

const LabelStyle = styled.span`
  display: inline-block;
  background-color: white;
  font-size: ${font.size.xs};
  color: #5f6b7a;
  padding-top: calc(${spacing.xs} / 2);
  padding-bottom: calc(${spacing.xs} / 2);
  padding-left: ${spacing.xs};
  padding-right: ${spacing.xs};
  border-radius: 13px;
  box-shadow: 0 2px 4px 0 rgba(31, 46, 61, 0.06);
  border: solid 1px #dfe3e8;
`;

type LabelProps = {
  title: string,
};

export const Label = (props: LabelProps) => <LabelStyle>{props.title}</LabelStyle>;

type LabelLinkProps = {
  title: string,
  to: any,
};

export const LabelLink = (props: LabelLinkProps) => (
  <Link {...props}>
    <LabelStyle>{props.title}</LabelStyle>
  </Link>
);
