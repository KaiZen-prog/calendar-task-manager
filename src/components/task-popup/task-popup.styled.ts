import styled, {StyledComponentBase} from 'styled-components';
import {taskPopup} from '../../theme/mixins';
import theme from '../../theme/theme';

interface ITaskPopup extends StyledComponentBase<any, object> {
  Wrapper?: any;
}

interface Props {
  $coordinateX: number;
  $coordinateY: number;
}

const TaskPopup: ITaskPopup = styled.div<Props>`
  ${taskPopup()};
  min-width: 290px;
  
  top: ${props => props.$coordinateY + theme.daySize.offsetY}px;
  left: ${props => props.$coordinateX + theme.daySize.offsetX}px;
`;

TaskPopup.Wrapper = styled.div`
  position: relative;
  
  padding: 28px 12px 12px;
  
  ::before {
    content: "";
    font-size: 0;
    position: absolute;
    
    top: 10px;
    left: -20px;
    border: 10px solid transparent;
    border-right-color: ${theme.color.basicWhite};
}
`

export default TaskPopup;
