import moment from 'moment';
import 'moment/locale/ru';
import {ActionType} from '../actions/actions';
import {mockTasks} from '../../mocks/mocks';
import {ITask} from '../../common/interfaces';

const initialState = {
  currentDate: moment(),
  tasks: [],
  currentTask: null,
  isTaskPopupOpened: false,
};

const reducer = (state = initialState, action: {type: string; payload?: any;}) => {
  switch (action.type) {

    //В начале работы приложения получаем задачи из localStorage
    //Если там пусто, берем из моков
    case ActionType.SET_TASKS:
      if (localStorage.getItem('tasks') !== null) {
        return Object.assign({}, state, {
          tasks: JSON.parse(<string>localStorage.getItem('tasks'))
        });
      } else {
        return Object.assign({}, state, {
          tasks: mockTasks
        });
      }

    case ActionType.ADD_TASK:

      return Object.assign({}, state, {
        tasks: [...state.tasks, action.payload],
        currentTask: null,
        isTaskPopupOpened: false
      });

    case ActionType.DELETE_TASK:
      return Object.assign({}, state, {
        tasks: state.tasks.filter((task: ITask) => task.date !== action.payload),
        currentTask: null,
        isTaskPopupOpened: false
      });

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
