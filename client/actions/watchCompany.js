import { COMPANY_WATCH, COMPANY_UNWATCH } from '../constants';

export const watchCompany = id => ({
  type: COMPANY_WATCH,
  id,
});

export const unWatchCompany = id => ({
  type: COMPANY_UNWATCH,
  id,
});
