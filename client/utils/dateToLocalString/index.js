import moment from 'moment';
// Format the date string to local string.
export default (regDate: string) => {
  const date = moment(regDate);
  moment.locale('sv');
  moment.updateLocale('sv', {
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
  });
  if (!date.isValid()) {
    console.error('The date you provided the function is invalid.');
    return false;
  }
  return date.format('D MMM YYYY');
};
