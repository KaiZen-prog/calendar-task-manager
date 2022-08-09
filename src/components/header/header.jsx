import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import {Repeat} from '../../utils/common';

const Header = () => {
  //Присоединяем Redux
  const currentDate = useSelector(store => store.currentDate);
  const dispatch = useDispatch();

  //Получаем moment'ы предыдущего и следующего месяцев
  const nextMonth = moment(currentDate).add(1, 'month');
  const prevMonth = moment(currentDate).subtract(1, 'month');

  //Приводим moment к строке требуемого вида
  const getProperMonthString = (date) => {
    let dateObj = moment(date).format('MMMM YYYY');
    return dateObj.replace(dateObj[0], dateObj[0].toUpperCase());
  };

  //Получаем массив всех дней, содержащихся в месяце date
  const getDaysArray = (date) => {
    return Array.from({length: moment(date).daysInMonth()}, (x, i) => moment(date).startOf('month').add(i, 'days'));
  };

  const currentMonthDays = getDaysArray(currentDate);

  //Если текущий месяц не начинается с понедельника,
  //то собирем и обрабатываем массив дней из предыдущего месяца: нам нужна последняя неделя, начиная с понедельника
  let prevMonthDays = [];

  if (currentMonthDays[0].format('dddd') !== 'понедельник') {
    prevMonthDays = getDaysArray(prevMonth);

    for (let i = prevMonthDays.length - 1; i >= prevMonthDays.length - 6; i--) {
      if (prevMonthDays[i].format('dddd') === 'понедельник') {
        prevMonthDays = prevMonthDays.slice(i, prevMonthDays.length);
        break;
      }
    }
  }

  //Собираем итоговый массив дней, выводящийся на экран
  const days = prevMonthDays.concat(currentMonthDays);

  return (
    <header className="header app__header">
      <button onClick={() => dispatch({type: 'CHANGE_MONTH', payload: prevMonth})}>
        Назад
      </button>
      {getProperMonthString(currentDate)}
      <button onClick={() => dispatch({type: 'CHANGE_MONTH', payload: nextMonth})}>
        Вперед
      </button>
      <button onClick={() => dispatch({type: 'CHANGE_MONTH', payload: moment()})}>
        Сегодня
      </button>
      <Repeat numTimes={days.length}>
        {(i) => <div key={i}>
          {
            i < 7
              ? moment(days[i]).format('dddd D')
              : moment(days[i]).format('D')
          }
        </div>
        }
      </Repeat>
    </header>
  );
};

Header.propTypes = {};

Header.displayName = 'Header';

export default Header;
