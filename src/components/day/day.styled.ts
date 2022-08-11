import styled, { StyledComponentBase } from "styled-components";
import theme from '../../theme/theme';
import {font} from '../../theme/mixins';

interface IDay extends StyledComponentBase<any, object> {
  DateSpan?: any;
}

const Day: IDay = styled.div`
  width: 143px;
  height: 120px;
  
  padding: 5px 8px;
  
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

Day.DateSpan = styled.span`
  ${font(theme.fonts.s14l16n.size, theme.fonts.s14l16n.lineHeight, theme.fonts.s14l16n.weight)};
  color: ${theme.color.dimGray};
`;

export default Day;