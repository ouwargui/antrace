export interface Ant {
  name: string;
  length: number;
  color: string;
  weight: number;
  probability?: number;
  state: CalculatingState;
}

export enum CalculatingState {
  CALCULATING = 'In progress',
  CALCULATED = 'Calculated',
  NOT_CALCULATED = 'Not yet run',
}
