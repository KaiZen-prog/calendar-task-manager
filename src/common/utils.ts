import moment from "moment";

export const getStringWithCapitalLetter = (str: string) => {
  return str.replace(str[0], str[0].toUpperCase());
};

export const adaptMomentToString = (date: moment.Moment | string) => {
  return moment(date).format('MMMM dddd D');
}
