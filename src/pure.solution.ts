import { IHash, ISolution } from './solution.interface';
import { Node, NodeArray } from './tree';

const childString = '├─ ';
const crossLeftString = '│  ';
const spaceString = '   ';
const finalChildString = '└─ ';

export default class PureSolution implements ISolution {
  data: NodeArray;
  isLastChildrenOfRootNode = false;

  constructor(treeArr: NodeArray) {
    this.data = treeArr;
  }

  run(): string {
    const treeHash: IHash = this.buildHashMap();
    const rootNode: Node = this.findRootNode();
    const lastIdChildrenOfRoot = this.getLastIdOfChildren(rootNode);
    return this.buildGraph(rootNode, treeHash, lastIdChildrenOfRoot);
  }

  buildHashMap(): IHash {
    return this.data.reduce(
      (acc: IHash, n: Node) => ({ ...acc, [n.id]: n }),
      {},
    );
  }

  findRootNode(): Node {
    return this.data.filter(n => n.parent === null)[0];
  }

  getLastIdOfChildren(node: Node): number {
    const children = node.children;
    return children[children.length - 1];
  }

  buildGraph(
    graphNode: Node,
    treeHash: IHash,
    lastIdChildrenOfRoot: number,
    level = 0,
    order = 0,
    parentLength = 0,
  ): string {
    const parentGraphString = `${graphNode.name}\r\n`;
    const currentChildrenLength = graphNode?.children.length;
    if (!this.isLastChildrenOfRootNode) {
      this.isLastChildrenOfRootNode = graphNode.id === lastIdChildrenOfRoot;
    }

    let parentString = parentGraphString;
    if (level !== 0 && level !== 1) {
      if (order < parentLength) {
        parentString = childString + parentGraphString; // is child
      } else {
        parentString = finalChildString + parentGraphString; // is last children
      }
    }

    if (currentChildrenLength === 0) {
      return parentString;
    } else {
      const currentLevel = level + 1;
      let orderIndex = 0;

      return graphNode?.children.reduce((acc: string, nodeId: number) => {
        orderIndex += 1;
        const treeNode: Node = treeHash[nodeId];

        return (
          acc +
          this.getPreLine(level, nodeId, lastIdChildrenOfRoot) +
          this.buildGraph(
            treeNode,
            treeHash,
            lastIdChildrenOfRoot,
            currentLevel,
            orderIndex,
            currentChildrenLength,
          )
        );
      }, parentString);
    }
  }

  getPreLine(
    level: number,
    nodeId: number,
    lastIdChildrenOfRoot: number,
  ): string {
    if (level === 0) {
      if (nodeId === lastIdChildrenOfRoot) {
        return finalChildString;
      }
      return childString;
    }
    let result = this.isLastChildrenOfRootNode ? spaceString : crossLeftString;

    for (let i = 1; i <= level - 1; i++) {
      result += spaceString;
    }

    return result;
  }
}
