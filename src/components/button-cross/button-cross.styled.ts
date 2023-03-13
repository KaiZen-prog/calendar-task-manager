import styled, {css, StyledComponentBase} from 'styled-components';
import {transitionColor, expandInteractiveArea} from '../../theme/mixins';
import theme from '../../theme/theme';
import {ButtonCrossSize} from '../../const';

interface IButtonCross extends StyledComponentBase<any, object> {
  Icon?: any,
  InteractiveArea?: any
}

interface Props {
  $buttonSize: number;
}

const setButtonSize = (buttonSize: number) => {
  const iconWidth = buttonSize + 1;
  const iconHeight = buttonSize / 6;

  const width = iconWidth + 'px';
  const height = iconHeight + 'px';

  const left = -1 * buttonSize / 2 + 'px';

  return` 
    width: ${width};
    height: ${height};
    
    left: ${left};
  `
}

const ButtonCross: IButtonCross = styled.button<Props>`
  width: ${props => props.$buttonSize}px;
  height: ${props => props.$buttonSize}px;
  
  position: absolute;
  
  top: 11px;
  right: 20px;
  
  padding: 0;

  cursor: pointer;
  ${transitionColor()};

  color: ${theme.color.dimGray};
  border: none;
  background-color: transparent;
  outline: none;

&:hover,
&:focus {
    color: ${theme.color.nero};
  }
`;

ButtonCross.Icon = styled.span<Props>`
  position: relative;
  
  &::before,
  &::after {
    position: absolute;
    content: "";
  
    background-color: currentColor;
    
    ${(props) => {
      return css`
        ${setButtonSize(props.$buttonSize)};
      `
    }};
  }
  
  &::before {
      transform: rotate(45deg);
    }
  
  &::after {
      transform: rotate(-45deg);
    }
`

ButtonCross.InteractiveArea = styled.span`
  ${expandInteractiveArea(ButtonCrossSize.expandedArea, ButtonCrossSize.expandedArea)};
`

export default ButtonCross;
