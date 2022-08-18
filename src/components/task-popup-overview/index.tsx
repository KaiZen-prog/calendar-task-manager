import React from "react";
import Block from './popup-overview.styled';
import {ITask} from '../../common/interfaces';

interface TaskPopupProps {
  task: ITask | null;
}

const TaskPopupOverview: React.FunctionComponent<TaskPopupProps> = props => {
  return (
    <Block>{props.task?.title}</Block>
  );
};

TaskPopupOverview.displayName = 'TaskPopupOverview';

export default TaskPopupOverview;
