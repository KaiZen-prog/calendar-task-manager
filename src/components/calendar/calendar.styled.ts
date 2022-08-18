import styled, { StyledComponentBase } from "styled-components";
import {css} from 'styled-components';
import theme from '../../theme/theme';
import {font, transitionColor} from '../../theme/mixins';

interface ICalendar extends StyledComponentBase<any, object> {
  ButtonsWrapper?: any;
  ChangeMonthButton?: any;
  Month?: any;
  ResetMonthButton?: any;
  CalendarWrapper?: any;
}

const Calendar: ICalendar = styled.section`
  width: ${theme.calendarWidth};
  
  margin-right: auto;
  margin-left: auto;
`;

Calendar.ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  
  padding-top: 12px;
  padding-bottom: 12px;
`;

Calendar.ChangeMonthButton = styled.button<{$isPrevMonth: boolean}>`
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
  
  ${transitionColor()}
  
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

Calendar.Month = styled.h2`
  display: inline-block;
  
  width: 156px;
  margin: 0;
  
  color: ${theme.color.nero};
  ${font(theme.fonts.s18l21n.size, theme.fonts.s18l21n.lineHeight, theme.fonts.s18l21n.weight)};
  
  text-align: center;
`;

Calendar.ResetMonthButton = styled.button`
  display: block;
  
  width: 59px;
  height: 18px;
  
  margin-left: 10px;
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

Calendar.CalendarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  margin-left: -1px;
`;

export default Calendar;
