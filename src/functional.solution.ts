import * as t from 'io-ts';
import tree from './tree.json';

const Node = t.type({
  id: t.number,
  name: t.string,
  children: t.array(t.number),
  parent: t.number || t.null,
});

type Node = t.TypeOf<typeof Node>;

const Nodes = t.array(Node);

type Nodes = t.TypeOf<typeof Nodes>;

const nodes = Node.decode(tree);

// eslint-disable-next-line no-undef
console.log('nodes: ', nodes);
