import styled, {StyledComponentBase} from 'styled-components';
import {taskPopup} from '../../theme/mixins';

interface ITaskPopup extends StyledComponentBase<any, object> {
  DateSpan?: any;
}

const TaskPopup: ITaskPopup = styled.div`
  ${taskPopup()};
`;

export default TaskPopup;
