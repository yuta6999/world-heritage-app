import { COUNTRY_CODE } from './constants';

export interface Country {
  id: typeof COUNTRY_CODE[number];
  region: string;
  name: string;
  formalName?: string;
}

export interface WorldHeritage {
  id: number;
  name: string;
  countryID: typeof COUNTRY_CODE[number];
  year: number;
  registrationCriteria: string;
  summary?: string;
  isNegativeLegacy?: boolean;
  inDanger?: boolean;
}
