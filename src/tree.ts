export interface Node {
  id: number;
  name: string;
  children: number[];
  parent: number | null;
}

export type NodeArray = Node[];
