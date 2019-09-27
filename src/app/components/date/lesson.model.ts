export interface Lesson {
  name: string;
  complexity: COMPLEXITY;
  date: Date
}

export enum COMPLEXITY {
  hard,
  medium,
  easy
}
