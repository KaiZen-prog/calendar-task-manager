import React from 'react';
import Block from './day.styled';
import moment from 'moment';
import {getStringWithCapitalLetter} from "../../common/utils";
import {ITask} from '../../common/interfaces';

interface DayProps {
  date: moment.Moment;
  dayNumber: number;
  task?: ITask;
}

const Day = (props: DayProps) => {
  const {date, dayNumber, task} = props;

  return (
    <Block>
      <Block.DateSpan>
        {dayNumber < 7
          ? getStringWithCapitalLetter(moment(date).format('dddd')) + ', ' + moment(date).format('D')
          : moment(date).format('D')
        }
      </Block.DateSpan>
      {task && <div>{task.title}</div>}
    </Block>
  );
};

Day.displayName = 'Day';

export default Day;
