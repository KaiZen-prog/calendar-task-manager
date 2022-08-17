import moment from 'moment';
import 'moment/locale/ru';
import {ActionType} from '../actions/actions';
import {tasks} from '../../mocks/mocks';

const initialState = {
  currentDate: moment(),
  tasks: tasks,
  currentTask: null,
  isTaskPopupOpened: false,
};

const reducer = (state = initialState, action: {type: string; payload: any;}) => {
  switch (action.type) {
    case ActionType.CHANGE_MONTH:
      return Object.assign({}, state, {
        currentDate: action.payload,
        currentTask: null,
        isTaskPopupOpened: false
      });

    case ActionType.TOGGLE_TASK_POPUP:
      return Object.assign({}, state, {
        currentTask: action.payload.currentTask,
        isTaskPopupOpened: action.payload.isTaskPopupOpened
      });
  }

  return state;
};

export default reducer;
