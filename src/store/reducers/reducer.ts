import moment from 'moment';
import 'moment/locale/ru';
import {ActionType} from '../actions/actions';
import {extend} from '../../utils/common';

interface ChangeMonthAction {
  type: string;
  payload: moment.Moment;
}

const initialState = {
  currentDate: moment()
};

const reducer = (state = initialState, action: ChangeMonthAction) => {
  switch (action.type) {
    case ActionType.CHANGE_MONTH:
      return extend(state, {
        currentDate: action.payload
      });
  }

  return state;
};

export default reducer;
