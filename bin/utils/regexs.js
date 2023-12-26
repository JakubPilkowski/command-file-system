"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ternaryFormat = exports.variableFormat = exports.kebabCase = exports.pascalCase = void 0;
exports.pascalCase = /[A-Z][a-z]+[A-Z]?[a-z]*$/g;
exports.kebabCase = /[a-z0-9]+(?:-[a-z0-9]+)*$/g;
exports.variableFormat = /\{\{(.+?)\}\}/g;
exports.ternaryFormat = /\{\?((.+\|){1,2}(.+)?)\?\}/g;
