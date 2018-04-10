import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, font, spacing } from '../../_settings/_variables';

export const Button = styled.button`
  display: inline-block;
  user-select: none;
  white-space: nowrap;
  vertical-align: middle;
  text-decoration: none;
  text-align: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.11);
  border-radius: 4px;
  padding: ${props => {
    if (props.small) return `${spacing.xxs} ${spacing.xs}`;
    if (props.big) return `${spacing.sm} ${spacing.lg}`;
    if (props.xl) return `${spacing.md} ${spacing.xl}`;
    return `${spacing.sm} ${spacing.md}`;
  }};
  background-color: ${props => {
    if (props.primary) return color.black;
    if (props.secondary) return color.grey;
    if (props.cta) return color.green;
    if (props.light) return color.white;
    return color.black;
  }};
  color: ${props => {
    if (props.primary) return color.white;
    if (props.secondary) return color.white;
    if (props.cta) return color.white;
    if (props.light) return color.black;
    return color.white;
  }};
  font-size: ${props => {
    if (props.small) return font.size.sm;
    if (props.big) return font.size.md;
    if (props.xl) return font.size.md;
    return font.size.sm;
  }};
`;

export const Anchor = Button.withComponent(Link);
