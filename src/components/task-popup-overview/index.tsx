import React from 'react';
import {useAppDispatch} from '../../hooks/hooks';
import {getStringWithDayNumberAndMonth} from '../../common/utils';
import Block from './popup-overview.styled';
import {ITask} from '../../common/interfaces';
import {ActionType} from '../../store/actions/actions';
import ExtraButton from '../button-extra';

interface TaskPopupProps {
  task: ITask;
}

const TaskPopupOverview: React.FunctionComponent<TaskPopupProps> = props => {
  const {task} = props;

  const dispatch = useAppDispatch();

  return (
    <Block>
      <Block.Title>
        {task.title}
      </Block.Title>
      <Block.Date>
        {getStringWithDayNumberAndMonth(task.date)}
      </Block.Date>
      <Block.ParticipantsTitle>
        Участники:
      </Block.ParticipantsTitle>
      <Block.Participants>
        {task.participants}
      </Block.Participants>

      <ExtraButton
        title={"Удалить"}
        handler={() => dispatch({type: ActionType.DELETE_TASK, payload: task.date})}
      />
    </Block>
  );
};

TaskPopupOverview.displayName = 'TaskPopupOverview';

export default TaskPopupOverview;
