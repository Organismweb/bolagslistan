import dateToLocalString from '../';

test('date should render into a local string', () => {
  expect(dateToLocalString('2017-12-12')).toBe('12 Dec 2017');
});
