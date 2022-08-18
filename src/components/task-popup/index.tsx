import * as React from 'react';
import ReactDOM from 'react-dom';
import {ITask} from '../../common/interfaces';
import Block from './task-popup.styled';

const modalRoot = document.getElementById('modal-root')  as HTMLElement;

interface Props {
  task: ITask | null;
  component: React.ElementType;
}

const TaskPopup: React.FunctionComponent<Props> = props => {
  const {task, component: WrappedComponent} = props;

  return ReactDOM.createPortal(
    <Block>
      <WrappedComponent task={task}/>
    </Block>,
    modalRoot,
  );
};

export default TaskPopup;
