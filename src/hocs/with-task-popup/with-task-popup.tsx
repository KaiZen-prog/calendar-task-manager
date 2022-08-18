import * as React from 'react';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {ITask} from '../../common/interfaces';
import {KeyCode} from '../../const';
import TaskPopup from '../../components/task-popup';
import TaskPopupOverview from '../../components/task-popup-overview';
import TaskPopupCreate from '../../components/task-popup-create';

interface Props {
  component: React.ElementType;
}

const WithTaskPopup: React.FunctionComponent<Props> = props => {
  const {component: WrappedComponent} = props;

  const [coordinate, setCoordinate] = useState({x: 0, y: 0});

  const dispatch = useAppDispatch();
  const isTaskPopupOpened = useAppSelector(store => store.isTaskPopupOpened);
  const currentTask = useAppSelector(store => store.currentTask);

  const onPopupOpening = (ref: React.RefObject<HTMLInputElement>, currentTask: ITask | null) => {
    const rect = ref?.current?.getBoundingClientRect();
    if (rect) {
      setCoordinate({x: Math.floor(rect.x), y: Math.floor(rect.y)})
    }

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
    <>
      <WrappedComponent onPopupOpening={onPopupOpening}/>

      {(isTaskPopupOpened && currentTask) && (
        <TaskPopup
          coordinateX={coordinate.x}
          coordinateY={coordinate.y}
          task={currentTask}
          component={TaskPopupOverview}
        />
      )}
      {(isTaskPopupOpened && currentTask === null) && (
        <TaskPopup
          coordinateX={coordinate.x}
          coordinateY={coordinate.y}
          task={currentTask}
          component={TaskPopupCreate}
        />
      )}
    </>
  );
};

export default WithTaskPopup;
