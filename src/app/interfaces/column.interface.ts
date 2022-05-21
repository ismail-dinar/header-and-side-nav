export type ColumnType = 'text' | 'textarea' | 'date' | 'number' | 'lookup' | 'email';

export interface Column {
  name: string;
  type: ColumnType;
}
