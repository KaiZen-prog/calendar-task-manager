import styled from 'styled-components';
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
