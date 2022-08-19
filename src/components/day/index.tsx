import {useRef} from 'react';
import Block from './day.styled';
import moment from 'moment';
import {getStringWithCapitalLetter,} from '../../common/utils';
import {ITask} from '../../common/interfaces';
import React from "react";

interface Props {
  date: moment.Moment;
  dayNumber: number;
  task: ITask | null;
  onPopupOpening: (...args: any[]) => void;
}

const Day: React.FunctionComponent<Props> = props => {
  const {date, dayNumber, task, onPopupOpening} = props;

  const dayRef = useRef<HTMLInputElement>(null);

  return (
    <Block ref={dayRef} tabindex='0' $isTask={task !== null} onClick={()=>{onPopupOpening(dayRef, task)}}>
      <Block.DateSpan>
        {dayNumber < 7
          ? getStringWithCapitalLetter(moment(date).format('dddd')) + ', ' + moment(date).format('D')
          : moment(date).format('D')
        }
      </Block.DateSpan>
      {task &&
      <>
        <Block.TaskTitle>{task.title}</Block.TaskTitle>
        <Block.TaskParticipants>{task.participants}</Block.TaskParticipants>
      </>}
    </Block>
  );
};

Day.displayName = 'Day';

export default Day;
