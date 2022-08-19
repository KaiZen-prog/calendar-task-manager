import styled, {StyledComponentBase} from 'styled-components';
import {font} from '../../theme/mixins';
import theme from '../../theme/theme';

interface ITaskPopupOverview extends StyledComponentBase<any, object> {
  Title?: any;
  Date?: any;
  ParticipantsTitle?: any;
  Participants?: any;
}

const TaskPopupOverview: ITaskPopupOverview = styled.div`
`;

TaskPopupOverview.Title = styled.p`
  color: ${theme.color.nero};
  ${font(theme.fonts.s18l21n.size, theme.fonts.s18l21n.lineHeight, theme.fonts.s18l21n.weight)};
  margin-top: 0;
  margin-bottom: 16px;
`;

TaskPopupOverview.Date = styled.p`
  color: ${theme.color.nero};
  ${font(theme.fonts.s14l16n.size, theme.fonts.s14l16n.lineHeight, theme.fonts.s14l16n.weight)};
  margin-top: 0;
  margin-bottom: 16px;
`;

TaskPopupOverview.ParticipantsTitle = styled.p`
  color: ${theme.color.dimGray};
  ${font(theme.fonts.s14l16l.size, theme.fonts.s14l16l.lineHeight, theme.fonts.s14l16l.weight)};
  margin-top: 0;
  margin-bottom: 4px;
`;

TaskPopupOverview.Participants = styled.p`
  color: ${theme.color.nero};
  ${font(theme.fonts.s12l14n.size, theme.fonts.s12l14n.lineHeight, theme.fonts.s12l14n.weight)};
  margin-top: 0;
  margin-bottom: 10px;
`;

export default TaskPopupOverview;
