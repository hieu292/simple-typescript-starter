import { Node, NodeArray } from './tree';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface ISolution {
  data: NodeArray;
  run(): string;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IHash {
  [details: number]: Node;
}
