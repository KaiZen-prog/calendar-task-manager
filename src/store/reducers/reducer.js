import moment from 'moment';
import 'moment/locale/ru';
import {ActionType} from '../actions/actions';
import {extend} from '../../utils/common';

const initialState = {
  currentDate: moment()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_MONTH:
      return extend(state, {
        currentDate: action.payload
      });
  }

  return state;
};

export default reducer;
