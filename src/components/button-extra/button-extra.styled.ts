import styled from 'styled-components';
import theme from '../../theme/theme';
import {font, transitionColor} from '../../theme/mixins';

const Button = styled.button`
  display: block;
  
  width: 59px;
  height: 18px;
  
  padding: 2px 2px;
  
  color: ${theme.color.nero};
  background: ${theme.color.basicWhite};
  
  box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 4px;
  
  cursor: pointer;
  
  ${font(theme.fonts.s12l14n.size, theme.fonts.s12l14n.lineHeight, theme.fonts.s12l14n.weight)};
  ${transitionColor()}
  
  :hover {
    color: ${theme.color.basicWhite};
    background: ${theme.color.dimGray};
  }
  
  :active {
    color: ${theme.color.basicWhite};
    background: ${theme.color.veryLightGray};
    box-shadow: none;
  }
  
  :focus {
    color: ${theme.color.basicWhite};
    background: ${theme.color.veryLightGray};
    outline: none;
    box-shadow: none;
  }
  
  :disabled {
    color: ${theme.color.veryLightGray};
    background: ${theme.color.basicWhite};
    box-shadow: none;
    border: 1px solid ${theme.color.veryLightGray};
  }
`;

export default Button;
