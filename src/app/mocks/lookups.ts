import { ILookup } from "../interfaces/lookup.interface";

export const currencies: ILookup[] = [
  {
    id: 1,
    code: 'USD',
    displayName: 'United States Dollar',
  },
  {
    id: 2,
    code: 'EUR',
    displayName: 'Euro',
  },
  {
    id: 3,
    code: 'GBP',
    displayName: 'British Pound',
  },
  {
    id: 4,
    code: 'JPY',
    displayName: 'Japanese Yen',
  },
  {
    id: 5,
    code: 'CHF',
    displayName: 'Swiss Franc',
  },
  {
    id: 6,
    code: 'CAD',
    displayName: 'Canadian Dollar',
  },
  {
    id: 7,
    code: 'TND',
    displayName: 'Tunisian Dinar',
  }
]

export const lookups = {
  currency: currencies,
}
