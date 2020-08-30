"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tree_json_1 = __importDefault(require("./tree.json"));
var pure_solution_1 = __importDefault(require("./pure.solution"));
var solution = new pure_solution_1.default(tree_json_1.default);
var result = solution.run();
// eslint-disable-next-line no-undef
console.log(result);
