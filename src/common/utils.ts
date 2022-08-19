import moment from 'moment';
import {Months} from '../const';

export const getStringWithCapitalLetter = (str: string) => {
  return str.replace(str[0], str[0].toUpperCase());
};

export const getStringWithDayNumberAndMonth = (date: moment.Moment | string) => {
  const monthMoment = moment(date).format('M');
  const monthNumber: number = +monthMoment;
  const monthString = Months[monthNumber-1];

  return moment(date).format('D') + ' ' + monthString;
};

export const adaptMomentToString = (date: moment.Moment | string) => {
  return moment(date).format('MMMM dddd D');
}
