import styled, {StyledComponentBase} from 'styled-components';
import {visuallyHidden} from '../../theme/mixins';

interface ITaskPopupCreate extends StyledComponentBase<any, object> {
  Label?: any;
  Input?: any;
}

const TaskPopupCreate: ITaskPopupCreate = styled.form`
`;

TaskPopupCreate.Label = styled.label`
  ${visuallyHidden()};
`;

TaskPopupCreate.Input = styled.input`

`;


export default TaskPopupCreate;
