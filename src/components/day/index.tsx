import React, {useState} from 'react';
import Block from './day.styled';
import moment from 'moment';
import {getStringWithCapitalLetter} from '../../common/utils';
import PopupOverview from '../popup-overview'
import {ITask} from '../../common/interfaces';

interface DayProps {
  date: moment.Moment;
  dayNumber: number;
  task: ITask | null;
}

const Day = ({date, dayNumber, task}: DayProps): JSX.Element => {
  const [isPopupOpened, setPopupOpen] = useState(false);

  const onPopupOpening = () => {
    setPopupOpen(true);
  };

  return (
    <Block tabindex='0' $isTask={task !== null} onClick={onPopupOpening}>
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
      {isPopupOpened && task &&
      <PopupOverview task={task}/>
      }
    </Block>
  );
};

Day.displayName = 'Day';

export default Day;
