import React from 'react';
import Block from './day.styled';
import moment from 'moment';

interface DayProps {
  date: moment.Moment;
}

const Day = ({date}: DayProps) => {
  return (
    <Block>
      <div>
        {moment(date).format('dddd D')}
      </div>
    </Block>
  );
};

Day.displayName = 'Day';

export default Day;
