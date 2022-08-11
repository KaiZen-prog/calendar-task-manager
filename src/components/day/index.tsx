import React from 'react';
import Block from './day.styled';
import moment from 'moment';
import {getStringWithCapitalLetter} from "../../common/utils";

interface DayProps {
  date: moment.Moment;
  dayNumber: number;
  task: Record<string, string>;
}

const Day = (props: DayProps) => {
  const {date, dayNumber, task} = props;

  const checkTask = () => {
    return Object.keys(task).length !== 0;
  }

  return (
    <Block tabindex='0' $isTask={checkTask()}>
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
