import styled from 'styled-components';
import theme from '../../theme/theme';
import {font} from '../../theme/mixins';

const Day = styled.div`
  width: 143px;
  height: 120px;
  
  :nth-child(7n+1) {
    border-left: 1px solid ${theme.color.nero};
  }
  
  :nth-child(1),
  :nth-child(2),
  :nth-child(3),
  :nth-child(4),
  :nth-child(5),
  :nth-child(6),
  :nth-child(7) {
    border-top: 1px solid ${theme.color.nero};
  }
  
  border-right: 1px solid ${theme.color.nero};
  border-bottom: 1px solid ${theme.color.nero};
`;

Day.Month = styled.span`
  color: ${theme.color.nero};
  ${font(theme.fonts.s18l21n.size, theme.fonts.s18l21n.lineHeight, theme.fonts.s18l21n.weight)}
`;

export default Day;
