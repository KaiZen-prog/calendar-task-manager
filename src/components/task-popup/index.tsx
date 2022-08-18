import * as React from 'react';
import ReactDOM from 'react-dom';
import {ITask} from '../../common/interfaces';
import Block from './task-popup.styled';

const modalRoot = document.getElementById('modal-root')  as HTMLElement;

interface Props {
  task: ITask | null;
  component: React.ElementType;
  coordinateX: number;
  coordinateY: number;
}

const TaskPopup: React.FunctionComponent<Props> = props => {
  const {task, component: WrappedComponent, coordinateX, coordinateY} = props;

  return ReactDOM.createPortal(
    <Block $coordinateX={coordinateX} $coordinateY={coordinateY}>
      <WrappedComponent task={task}/>
    </Block>,
    modalRoot,
  );
};

export default TaskPopup;
