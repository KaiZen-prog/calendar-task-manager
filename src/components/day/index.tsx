import React from 'react';
import Block from './day.styled';
import moment from 'moment';
import {getStringWithCapitalLetter} from "../../common/utils";

interface DayProps {
  date: moment.Moment;
  dayNumber: number;
}

const Day = (props: DayProps) => {
  const {date, dayNumber} = props;

  return (
    <Block>
      <Block.DateSpan>
        {dayNumber < 7
          ? getStringWithCapitalLetter(moment(date).format('dddd')) + ', ' + moment(date).format('D')
          : moment(date).format('D')
        }
      </Block.DateSpan>
    </Block>
  );
};

Day.displayName = 'Day';

export default Day;
