import styled, {StyledComponentBase} from 'styled-components';
import {css} from 'styled-components';
import theme from '../../theme/theme';
import {font, transitionColor, lineClamp} from '../../theme/mixins';

interface IDay extends StyledComponentBase<any, object> {
  DateSpan?: any;
  TaskTitle?: any;
  TaskParticipants?: any;
}

const Day: IDay = styled.div<{$isTask: boolean}>`
  width: 143px;
  height: 120px;
  
  padding: 5px 8px;
  
  ${transitionColor()};
  
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
  
  cursor: pointer;
  
  :hover {
    background: ${theme.color.whiteSmoke};
  }
  
  :active {
    box-shadow: 0 0 10px 2px ${theme.color.navyBlue};
  }
  
  ${(props) => {
    if(props.$isTask) {
      return css`
        background: ${theme.color.pattensBlue};
        
        :hover {
          background: ${theme.color.dodgerBlue};
        }
      ` 
    }
}}
`;

Day.DateSpan = styled.span`
  ${font(theme.fonts.s14l16n.size, theme.fonts.s14l16n.lineHeight, theme.fonts.s14l16n.weight)};
  color: ${theme.color.dimGray};
`;

Day.TaskTitle = styled.h3`
  ${lineClamp(1)};
  ${font(theme.fonts.s14l16n.size, theme.fonts.s14l16n.lineHeight, theme.fonts.s14l16n.weight)};
  color: ${theme.color.nero};
  
  margin-top: 8px;
  margin-bottom: 8px;
`;

Day.TaskParticipants = styled.p`
  ${lineClamp(3)};
  ${font(theme.fonts.s14l16n.size, theme.fonts.s14l16n.lineHeight, theme.fonts.s14l16n.weight)};
  color: ${theme.color.dimGray};
  
  margin: 0;
`;

export default Day;
