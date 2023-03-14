import styled, {StyledComponentBase} from 'styled-components';
import {visuallyHidden} from '../../theme/mixins';

interface ITaskPopupCreate extends StyledComponentBase<any, object> {
  Form?: any;
  Label?: any;
  Input?: any;
  Submit?: any;
}

const TaskPopupCreate: ITaskPopupCreate = styled.p`
`;

TaskPopupCreate.Form = styled.form`

`;

TaskPopupCreate.Label = styled.label`
  ${visuallyHidden()};
`;

TaskPopupCreate.Input = styled.input`

`;

TaskPopupCreate.Submit = styled.button`

`;

export default TaskPopupCreate;
