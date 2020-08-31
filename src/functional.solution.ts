import * as D from 'io-ts/Decoder'
import tree from './tree.json';
import {isLeft, isRight} from "fp-ts/These";
import {fromNullable} from "fp-ts/Option";
import {pipe} from "fp-ts/function";
import {fold} from "fp-ts/Either";

const Node = D.type({
  id: D.number,
  name: D.string,
  children: D.array(D.number),
  parent: D.nullable(D.number),
});

type INode = D.TypeOf<typeof Node>;

const Nodes = D.array(Node);

type INodes = D.TypeOf<typeof Nodes>;

const onLeft = (errors: D.DecodeError): string => `${errors} error(s) found`;

const onRight = (s: INodes) => `No errors: ${s}`;

const nodes = pipe(Nodes.decode(tree), fold(onLeft, onRight));

// eslint-disable-next-line no-undef
console.log('nodes: ', nodes);
