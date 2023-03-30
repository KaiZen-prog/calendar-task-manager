import styled, {StyledComponentBase} from 'styled-components';
import theme from '../../theme/theme';
import {visuallyHidden, font} from '../../theme/mixins';

interface ITaskPopupCreate extends StyledComponentBase<any, object> {
  Label?: any;
  Input?: any;
}

const TaskPopupCreate: ITaskPopupCreate = styled.form`
  display: flex;
  flex-direction: column;
`;

TaskPopupCreate.Label = styled.label`
  ${visuallyHidden()};
`;

TaskPopupCreate.Input = styled.input`
  margin-bottom: 8px;
  padding: 6px 12px;
  
  color: ${theme.color.nero};
  ${font(theme.fonts.s14l16l.size, theme.fonts.s14l16l.lineHeight, theme.fonts.s14l16l.weight)};
  
  background: ${theme.color.basicWhite};
  border: 1px solid ${theme.color.veryLightGray};

  box-shadow: inset 0 0 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  
  outline: none;
  
  :first-child {
    margin-bottom: 0;
  }

  ::placeholder {
    color: ${theme.color.veryLightGray};
    ${font(theme.fonts.s14l16l.size, theme.fonts.s14l16l.lineHeight, theme.fonts.s14l16l.weight)};
  }
  
  :hover,
  :focus {
    border-color: ${theme.color.dodgerBlue};
  }
  
  :disabled {
    color: ${theme.color.veryLightGray};
    background: ${theme.color.whiteSmoke};
  }
`;

export default TaskPopupCreate;
