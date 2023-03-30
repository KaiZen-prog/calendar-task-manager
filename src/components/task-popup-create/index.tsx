import React, {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/hooks';
import Block from './popup-create.styled';
import {InputChangeEventHandler, FormSubmitEventHandler} from '../../common/types';
import moment from 'moment';
import {ActionType} from '../../store/actions/actions';
import ExtraButton from '../button-extra';

const TaskPopupCreate: React.FunctionComponent = () => {
  const chosenDay = useAppSelector(store => store.chosenDay);
  const dispatch = useAppDispatch();

  const [state, setState] = useState({
    taskName: '',
    taskDate: moment.now(),
    taskParticipants: '',
  });

  const onInputChange: InputChangeEventHandler = (evt) => {
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
        date: chosenDay,
      }});
  };

  return (
    <Block action="#" onSubmit={submitHandler}>
      <Block.Label htmlFor="taskName">
        Название события
      </Block.Label>
      <Block.Input
        id="taskName"
        type="text"
        name="taskName"
        placeholder="Событие"
        onChange={onInputChange}
        value={state.taskName}
        autoFocus
        required
      />

      <Block.Label htmlFor="taskParticipants">
        Участники
      </Block.Label>
      <Block.Input
        id="taskParticipants"
        type="text"
        name="taskParticipants"
        placeholder="Имена участников"
        onChange={onInputChange}
        value={state.taskParticipants}
        autoFocus
        required
      />
      <ExtraButton
        title={"Создать"}
        type={"submit"}
      />
    </Block>
  );
};

TaskPopupCreate.displayName = 'TaskPopupCreate';

export default TaskPopupCreate;
