"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateComponent_1 = __importDefault(require("./generateComponent"));
const generateIndex_1 = __importDefault(require("./generateIndex"));
const generateStyles_1 = __importDefault(require("./generateStyles"));
const generateTest_1 = __importDefault(require("./generateTest"));
const generateTypes_1 = __importDefault(require("./generateTypes"));
exports.default = [
    generateComponent_1.default,
    generateIndex_1.default,
    generateTypes_1.default,
    generateTest_1.default,
    generateStyles_1.default,
];
