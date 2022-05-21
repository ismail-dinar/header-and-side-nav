import { Column } from '../interfaces/column.interface';

export const columns: Array<Column> = [
  {
    name: 'Column1',
    type: 'text',
  },
  {
    name: 'Column2',
    type: 'textarea',
  },
  {
    name: 'Column3',
    type: 'date',
  },
  {
    name: 'Column4',
    type: 'number',
  },
  {
    name: 'Column5',
    type: 'lookup',
  },
];

export const tablesColumns: Record<string, Array<Column>> = {
  persons: [
    { name: 'id', type: 'number' },
    { name: 'firstName', type: 'text' },
    { name: 'lastName', type: 'text' },
    { name: 'email', type: 'email' },
    { name: 'gender', type: 'lookup' },
    { name: 'ipAddress', type: 'text' },
  ],
  accounts: [
    { name: 'id', type: 'number' },
    { name: 'name', type: 'text' },
    { name: 'description', type: 'textarea' },
    { name: 'balance', type: 'number' },
    { name: 'currency', type: 'lookup' },
    { name: 'createdAt', type: 'date' },
    { name: 'updatedAt', type: 'date' },
  ],
};
