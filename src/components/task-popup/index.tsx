import * as React from 'react';
import ReactDOM from 'react-dom';
import {ITask} from '../../common/interfaces';
import Block from './task-popup.styled';

const modalRoot = document.getElementById('modal-root')  as HTMLElement;

interface Props {
  task: ITask | null;
  component: React.ElementType;
  coordinate: {x: number, y: number};
  onPopupClosure: (...args: any[]) => void;
}

const TaskPopup: React.FunctionComponent<Props> = props => {
  const {task, component: WrappedComponent, coordinate, onPopupClosure} = props;

  return ReactDOM.createPortal(
    <Block $coordinateX={coordinate.x} $coordinateY={coordinate.y}>
      <Block.Wrapper>
        <WrappedComponent task={task}/>
        <Block.CloseButton type='button' onClick={onPopupClosure}>
          <span className="visually-hidden">Закрыть</span>
        </Block.CloseButton>
      </Block.Wrapper>
    </Block>,
    modalRoot,
  );
};

export default TaskPopup;
