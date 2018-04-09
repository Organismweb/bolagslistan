import { COMPANY_WATCH, COMPANY_UNWATCH } from '../constants';

export const watchCompany = company => ({
  type: COMPANY_WATCH,
  payload: company,
});

export const unWatchCompany = company => ({
  type: COMPANY_UNWATCH,
  payload: company,
});
