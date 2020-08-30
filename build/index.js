"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Without libs
// import tree from './tree.json';
var tree_test_1_json_1 = __importDefault(require("./tree_test_1.json"));
var pure_solution_1 = __importDefault(require("./pure.solution"));
var solution = new pure_solution_1.default(tree_test_1_json_1.default);
var result = solution.run();
// With ts-io and ts-pf
// Todo: implement here
// eslint-disable-next-line no-undef
console.log(result);
