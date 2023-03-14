import moment from 'moment';
import 'moment/locale/ru';
import {ActionType} from '../actions/actions';
import {mockTasks} from '../../mocks/mocks';

const initialState = {
  currentDate: moment(),
  tasks: [],
  currentTask: null,
  isTaskPopupOpened: false,
};

const reducer = (state = initialState, action: {type: string; payload: any;}) => {
  switch (action.type) {

    case ActionType.ADD_TASK:
      return Object.assign({}, state, {
        tasks: [...state.tasks, action.payload]
      });

    case ActionType.REFRESH_TASKS:
      if (localStorage.getItem('tasks') !== null) {
        return Object.assign({}, state, {
          tasks: JSON.parse(<string>localStorage.getItem('tasks'))
        });
      } else {
        return Object.assign({}, state, {
          tasks: mockTasks
        });
      }

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
