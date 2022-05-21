export interface Row {
  [key: string]: any;
}

export interface Table {
  name: string;
  displayName: string;
}

export type TableData = Array<Row>;
