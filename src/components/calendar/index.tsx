import React, {useEffect} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/hooks';
import {getStringWithCapitalLetter, adaptMomentToString} from '../../common/utils';
import moment from 'moment';
import Block from './calendar.styled';
import Day from '../day';
import {ITask} from '../../common/interfaces';
import {ActionType} from '../../store/actions/actions';
import ExtraButton from '../button-extra';

interface Props {
  onPopupOpening: (...args: any[]) => void;
}

const Calendar: React.FunctionComponent<Props> = props => {
  const currentDate = useAppSelector(store => store.currentDate);
  const tasks : ITask[] = useAppSelector(store => store.tasks);
  const dispatch = useAppDispatch();

  //При изменении задач в сторе, обновляем их и в localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  //Получаем moment'ы предыдущего и следующего месяцев
  const nextMonth = moment(currentDate).add(1, 'month');
  const prevMonth = moment(currentDate).subtract(1, 'month');

  //Получаем массив всех дней, содержащихся в месяце date
  const getDaysArray = (date: moment.MomentInput) => {
    return Array.from({length: moment(date).daysInMonth()}, (x, i) => moment(date).startOf('month').add(i, 'days'));
  };

  let currentMonthDays: moment.Moment[] = getDaysArray(currentDate);

  //Если текущий месяц не начинается с понедельника,
  //то собирем массив дней из последней недели предыдущего месяца, начиная с понедельника
  const prevMonthDays = [];

  if (currentMonthDays[0].format('dddd') !== 'понедельник') {
    for (let i = 1; i <=  6; i++) {
      const buff = moment(currentMonthDays[0]);
      prevMonthDays.push(buff.subtract(i, 'day'));

      if (buff.format('dddd') === 'понедельник') {
        break;
      }
    }
    prevMonthDays.reverse();
  }

  //Собираем итоговый массив дней, выводящийся на экран
  if (prevMonthDays.length > 0) {
    currentMonthDays = prevMonthDays.concat(currentMonthDays);
  }

  //Фильтруем задачи, оставляя только те, которые подлежат выводу на текущую страницу календаря
  const currentTasks = tasks.filter(task => moment(task.date).isBetween(moment(currentMonthDays[0]),moment(currentMonthDays[currentMonthDays.length-1]), 'days', '[]'));

  return (
    <Block>
      <Block.ButtonsWrapper>
        <Block.ChangeMonthButton type='button' $isPrevMonth onClick={() => dispatch({type: ActionType.CHANGE_MONTH, payload: prevMonth})}>
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.1158 8.52066L6.24034 2.46262C5.83045 2.18266 5.41746 2.03448 5.07419 2.03448C4.41053 2.03448 4 2.56553 4 3.45443V16.5476C4 17.4355 4.41002 17.9655 5.07212 17.9655C5.41591 17.9655 5.82231 17.8172 6.2331 17.5365L15.1127 11.4786C15.6838 11.0883 16 10.5632 16 9.99929C16.0001 9.43575 15.6875 8.91076 15.1158 8.52066Z" fill="currentcolor"/>
          </svg>
          <span className="visually-hidden">Назад</span>
        </Block.ChangeMonthButton>
        <Block.Month>{getStringWithCapitalLetter(moment(currentDate).format('MMMM YYYY'))}</Block.Month>
        <Block.ChangeMonthButton type='button' onClick={() => dispatch({type: ActionType.CHANGE_MONTH, payload: nextMonth})}>
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.1158 8.52066L6.24034 2.46262C5.83045 2.18266 5.41746 2.03448 5.07419 2.03448C4.41053 2.03448 4 2.56553 4 3.45443V16.5476C4 17.4355 4.41002 17.9655 5.07212 17.9655C5.41591 17.9655 5.82231 17.8172 6.2331 17.5365L15.1127 11.4786C15.6838 11.0883 16 10.5632 16 9.99929C16.0001 9.43575 15.6875 8.91076 15.1158 8.52066Z" fill="currentcolor"/>
          </svg>
          <span className="visually-hidden">Вперед</span>
        </Block.ChangeMonthButton>
        <ExtraButton
          title={"Сегодня"}
          handler={() => dispatch({type: ActionType.CHANGE_MONTH, payload: moment()})}
        />
      </Block.ButtonsWrapper>

      <Block.CalendarWrapper>
        <>
          {currentMonthDays.map((day,i) => {
            let task = null;
            const buff = currentTasks.find( (t) => adaptMomentToString(t.date) === adaptMomentToString(day));
            if (buff) {
              task = buff;
            }
            return <Day key={i} date={day} dayNumber={i} task={task} onPopupOpening={props.onPopupOpening}/>
            }
          )}
        </>
      </Block.CalendarWrapper>
    </Block>
  );
};

Calendar.displayName = 'Calendar';

export default Calendar;
