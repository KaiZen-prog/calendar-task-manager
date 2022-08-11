import styled from 'styled-components';
import {css} from 'styled-components';
import theme from '../../theme/theme';
import {font} from '../../theme/mixins';

const Calendar = styled.section`
  width: ${theme.CalendarWidth};
  
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
`;

Calendar.ButtonsWrapper = styled.div`
  display: flex;
`;

Calendar.ChangeMonthButton = styled.button`
  display: block;
  
  width: 32px;
  height: 24px;
  
  padding: 2px 2px;
  
  color: ${theme.color.dimGray};
  background: ${theme.color.basicWhite};
  
  box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 4px;
  
  cursor: pointer;
  
  :hover {
    color: ${theme.color.basicWhite};
    background: ${theme.color.dimGray};
    box-shadow: none;
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
  
  ${(props) => {
  if (props.$isPrevMonth) {
    return css`
        transform: scale(-1, 1)
      `
  }
}}
`;

Calendar.Month = styled.span`
  color: ${theme.color.nero};
  ${font(theme.fonts.s18l21n.size, theme.fonts.s18l21n.lineHeight, theme.fonts.s18l21n.weight)}
`;

Calendar.CalendarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  margin-left: -1px;
`;

export default Calendar;
