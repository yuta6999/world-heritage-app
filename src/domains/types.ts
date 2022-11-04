import { COUNTRY_CODE } from './constants';

export interface Country {
  id: typeof COUNTRY_CODE[number];
  region: string;
  name: string;
  formalName?: string;
}

export interface Player {
  id: string;
  name: string;
  schoolID: typeof COUNTRY_CODE[number];
  grade: number;
  height?: number;
}
