import { COMPANY_WATCH } from '../constants';

const watchCompany = company => ({
  type: COMPANY_WATCH,
  payload: company,
});

export default watchCompany;
