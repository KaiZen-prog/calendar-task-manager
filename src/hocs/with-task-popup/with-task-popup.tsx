import * as React from 'react';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {ITask} from '../../common/interfaces';
import {KeyCode} from '../../const';
import TaskPopup from '../../components/task-popup';
import TaskPopupOverview from '../../components/task-popup-overview';
import TaskPopupCreate from '../../components/task-popup-create';
import {ActionType} from '../../store/actions/actions';

interface Props {
  component: React.ElementType;
}

const WithTaskPopup: React.FunctionComponent<Props> = props => {
  const {component: WrappedComponent} = props;

  const dispatch = useAppDispatch();

  const [coordinate, setCoordinate] = useState({x: 0, y: 0});

  const isTaskPopupOpened = useAppSelector(store => store.isTaskPopupOpened);
  const currentTask = useAppSelector(store => store.currentTask);

  const onPopupOpening = (ref: React.RefObject<HTMLInputElement>, currentTask: ITask | null) => {
    document.documentElement.style.overflow = 'hidden';
    const rect = ref?.current?.getBoundingClientRect();
    if (rect) {
      setCoordinate({x: Math.floor(rect.right), y: Math.floor(rect.top)});
    }

    dispatch({type: ActionType.TOGGLE_TASK_POPUP, payload: {currentTask: currentTask, isTaskPopupOpened: true}})
    document.addEventListener('keydown', closePopupKeydown);
  }

  const onPopupClosure = () => {
    document.documentElement.style.overflow = 'auto';
    dispatch({type: ActionType.TOGGLE_TASK_POPUP, payload: {currentTask: null, isTaskPopupOpened: false}})
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
          coordinate={coordinate}
          task={currentTask}
          component={TaskPopupOverview}
          onPopupClosure={onPopupClosure}
        />
      )}
      {(isTaskPopupOpened && currentTask === null) && (
        <TaskPopup
          coordinate={coordinate}
          task={currentTask}
          component={TaskPopupCreate}
          onPopupClosure={onPopupClosure}
        />
      )}
    </>
  );
};

export default WithTaskPopup;
