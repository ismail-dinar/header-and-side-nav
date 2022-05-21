export type ColumnType = 'text' | 'textarea' | 'date' | 'number' | 'lookup';

export interface Column {
  name: string;
  type: ColumnType;
}
