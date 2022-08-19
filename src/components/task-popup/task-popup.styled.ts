import styled, {StyledComponentBase} from 'styled-components';
import {taskPopup} from '../../theme/mixins';
import theme from '../../theme/theme';

interface ITaskPopup extends StyledComponentBase<any, object> {
  Wrapper?: any;
  CloseButton?: any;
}

interface Props {
  $coordinateX: number;
  $coordinateY: number;
}

const TaskPopup: ITaskPopup = styled.div<Props>`
  ${taskPopup()};
  
  top: ${props => props.$coordinateY + theme.daySize.offsetY}px;
  left: ${props => props.$coordinateX + theme.daySize.offsetX}px;
`;

TaskPopup.Wrapper = styled.div`
  position: relative;
  
  padding-top: 28px;
  padding-left: 12px;
  padding-right: 12px;
  
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

TaskPopup.CloseButton = styled.button`
  position: absolute;
  
  top: 10px;
  right: 10px;
  
  cursor: pointer;
`

export default TaskPopup;
