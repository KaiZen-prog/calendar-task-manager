import {css} from 'styled-components';
import theme from '../theme/theme';

export const font = (size, height, weight) => css`
font-style: normal;
	font-size: ${size}px;
	line-height: ${height}px;
	font-weight: ${weight};
`;

export const transitionColor = (value=theme.animation.trans300) => css`
  transition: color ${value};
  transition: background ${value};
;`

export const lineClamp = (clamp) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${clamp};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const button = (color, background, backgroundHovered) => css`
  display: inline-block;

  font-weight: 500;
  text-align: center;

  color: ${color};
  background: ${background};

  border: none;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    background: ${backgroundHovered};
  }
`;

export const visuallyHidden = () => css`
  position: absolute;
  clip: rect(0, 0, 0, 0);
`;

export const blockCentered = (width) => css`
  width: ${width};
  margin: auto;
`;

export const backgroundImage = (logo, width, height) => css`
  content: "";
  position: absolute;
  display: block;

  width: ${width};
  height: ${height};

  background-image: url(${logo});
  background-repeat: no-repeat;
`;
