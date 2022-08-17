import * as React from 'react';
import {useAppDispatch} from '../../hooks/hooks';
import {ITask} from "../../common/interfaces";
import {KeyCode} from '../../const';

interface Props {
  component: React.ElementType;
  task?: ITask | null;
}

const withTaskPopup: React.FunctionComponent<Props> = props => {
  const {component: WrappedComponent} = props;
  const dispatch = useAppDispatch();

  const onPopupOpening = (currentTask: ITask | null) => {
    dispatch({type: 'TOGGLE_TASK_POPUP', payload: {currentTask: currentTask, isTaskPopupOpened: true}})
    document.documentElement.style.overflow = 'hidden';
    document.addEventListener('keydown', closePopupKeydown);
  }

  const onPopupClosure= () => {
    dispatch({type: 'TOGGLE_TASK_POPUP', payload: {currentTask: null, isTaskPopupOpened: false}})
    document.documentElement.style.overflow = 'auto';
    document.removeEventListener('keydown', closePopupKeydown);
  }

  const closePopupKeydown = (evt: KeyboardEvent) => {
    if (evt.keyCode === KeyCode.ESC) {
      onPopupClosure();
    }
  }

  return (
    <WrappedComponent
      onPopupOpening={onPopupOpening}
      onPopupClosure={onPopupClosure}
    />
  );
};

export default withTaskPopup;
