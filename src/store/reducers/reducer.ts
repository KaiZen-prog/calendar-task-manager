import moment from 'moment';
import 'moment/locale/ru';
import {ActionType} from '../actions/actions';

const initialState = {
  currentDate: moment()
};

const reducer = (state = initialState, action: {type: string; payload: moment.Moment;}) => {
  switch (action.type) {
    case ActionType.CHANGE_MONTH:
      return Object.assign({}, state, {
        currentDate: action.payload
      });
  }

  return state;
};

export default reducer;
