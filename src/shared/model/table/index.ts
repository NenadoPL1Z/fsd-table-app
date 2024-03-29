export interface TableLine {
  id: number;
  parentId: number;
  isActive: boolean;
  balance: string;
  name: string;
  email: string;
  children?: TableLine[];
}

export type TableLineKeyofUnion = keyof TableLine;

export type TableArr = TableLine[];
