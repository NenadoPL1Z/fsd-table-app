export interface TableLine {
  id: number;
  parentId: number;
  isActive: boolean;
  balance: string;
  name: string;
  email: string;
}

export type TableArr = TableLine[];
