import React from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/hooks';
import moment from 'moment';
import Block from './calendar.styled';
import Day from '../day';

const Calendar = () => {
  //Присоединяем Redux
  const currentDate = useAppSelector(store => store.currentDate);
  const dispatch = useAppDispatch();

  //Получаем moment'ы предыдущего и следующего месяцев
  const nextMonth = moment(currentDate).add(1, 'month');
  const prevMonth = moment(currentDate).subtract(1, 'month');

  //Приводим moment к строке требуемого вида
  const getProperMonthString = (date: moment.Moment | string) => {
    let dateObj = moment(date).format('MMMM YYYY');
    return dateObj.replace(dateObj[0], dateObj[0].toUpperCase());
  };

  //Получаем массив всех дней, содержащихся в месяце date
  const getDaysArray = (date: moment.MomentInput) => {
    return Array.from({length: moment(date).daysInMonth()}, (x, i) => moment(date).startOf('month').add(i, 'days'));
  };

  let currentMonthDays = getDaysArray(currentDate);

  //Если текущий месяц не начинается с понедельника,
  //то собирем массив дней из последней недели предыдущего месяца, начиная с понедельника
  let prevMonthDays = [];

  if (currentMonthDays[0].format('dddd') !== 'понедельник') {
    for (let i = 1; i <=  6; i++) {
      let buff = moment(currentMonthDays[0]);
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

  return (
    <Block>
      <Block.ButtonsWrapper>
        <button onClick={() => dispatch({type: 'CHANGE_MONTH', payload: prevMonth})}>
          Назад
        </button>
        <Block.Month>{getProperMonthString(currentDate)}</Block.Month>
        <button onClick={() => dispatch({type: 'CHANGE_MONTH', payload: nextMonth})}>
          Вперед
        </button>
        <button onClick={() => dispatch({type: 'CHANGE_MONTH', payload: moment()})}>
          Сегодня
        </button>
      </Block.ButtonsWrapper>
      <Block.CalendarWrapper>
        <>
          {currentMonthDays.map((day,i) =>
            <Day key={i} date={day}/>
          )}
        </>
      </Block.CalendarWrapper>
    </Block>
  );
};

Calendar.displayName = 'Calendar';

export default Calendar;
