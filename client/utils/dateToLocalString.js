import moment from 'moment';
// Format the date string to local string.
export default (regDate: string) => {
  moment.locale('sv');
  moment.updateLocale('sv', {
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
  });
  return moment(regDate).format('D MMM YYYY');
};
