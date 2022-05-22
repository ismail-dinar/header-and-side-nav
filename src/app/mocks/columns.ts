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
    { name: 'id', type: 'number', required: true },
    { name: 'firstName', type: 'text', required: true },
    { name: 'lastName', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'gender', type: 'lookup', required: true   },
    { name: 'ipAddress', type: 'text', required: true  },
  ],
  accounts: [
    { name: 'id', type: 'number', required: true  },
    { name: 'name', type: 'text', required: true  },
    { name: 'description', type: 'textarea', required: true  },
    { name: 'balance', type: 'number', required: true  },
    { name: 'currency', type: 'lookup', required: true  },
    { name: 'createdAt', type: 'date', required: true  },
    { name: 'updatedAt', type: 'date', required: true  },
  ],
};
