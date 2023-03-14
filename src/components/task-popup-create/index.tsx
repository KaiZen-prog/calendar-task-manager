import React, {useState} from 'react';
import {useAppDispatch} from '../../hooks/hooks';
import Block from './popup-create.styled';
import {InputChangeEventHandler, FormSubmitEventHandler} from '../../common/types';
import moment from 'moment';
import {ActionType} from '../../store/actions/actions';

const TaskPopupCreate: React.FunctionComponent = () => {

  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    taskName: '',
    taskDate: moment.now(),
    taskParticipants: '',
  });

  const onLogInFieldChange: InputChangeEventHandler = (evt) => {
    const {name, value} = evt.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler: FormSubmitEventHandler = (evt) => {
    evt.preventDefault();

    dispatch({type: ActionType.ADD_TASK, payload: {
        title: state.taskName,
        participants: state.taskParticipants,
        date: moment(state.taskDate).format('YYYY-MM-DD'),
      }});
  };

  return (
    <Block>
      <Block.Form action="#" onSubmit={submitHandler}>
        <Block.Label for="taskName">
          Название события
        </Block.Label>
        <Block.Input
          id="taskName"
          type="text"
          name="taskName"
          placeholder="Событие"
          onChange={onLogInFieldChange}
          value={state.taskName}
          autoFocus
          required
        />


        <Block.Label for="taskDate">
          Дата события
        </Block.Label>
        <Block.Input
          id="taskDate"
          type="date"
          name="taskDate"
          placeholder="День, месяц, год"
          onChange={onLogInFieldChange}
          value={state.taskDate}
          autoFocus
          required
        />


        <Block.Label for="taskParticipants">
          Участники
        </Block.Label>
        <Block.Input
          id="taskParticipants"
          type="text"
          name="taskParticipants"
          placeholder="Имена участников"
          onChange={onLogInFieldChange}
          value={state.taskParticipants}
          autoFocus
          required
        />
        <Block.Submit type="submit">Войти</Block.Submit>
      </Block.Form>
    </Block>
  );
};

TaskPopupCreate.displayName = 'TaskPopupCreate';

export default TaskPopupCreate;
