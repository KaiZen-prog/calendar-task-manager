import styled, {StyledComponentBase} from 'styled-components';
import {taskPopup} from '../../theme/mixins';
import theme from "../../theme/theme";

interface ITaskPopup extends StyledComponentBase<any, object> {
  DateSpan?: any;
}

interface Props {
  $coordinateX: number;
  $coordinateY: number;
}

const TaskPopup: ITaskPopup = styled.div<Props>`
  ${taskPopup()};
  
  top: ${props => props.$coordinateY}px;
  left: ${props => props.$coordinateX + theme.daySize.width}px;
`;

export default TaskPopup;
