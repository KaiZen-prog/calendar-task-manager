import React from 'react';
import {getStringWithDayNumberAndMonth} from '../../common/utils';
import Block from './popup-overview.styled';
import {ITask} from '../../common/interfaces';

interface TaskPopupProps {
  task: ITask;
}

const TaskPopupOverview: React.FunctionComponent<TaskPopupProps> = props => {
  const {task} = props;

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
    </Block>
  );
};

TaskPopupOverview.displayName = 'TaskPopupOverview';

export default TaskPopupOverview;
