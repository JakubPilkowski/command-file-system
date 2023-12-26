"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENERATE_TEST_DESCRIPTION = exports.GENERATE_TEST_SCRIPT = void 0;
const generateTestBuilder_1 = __importDefault(require("./generateTestBuilder"));
const generateTestHandler_1 = __importDefault(require("./generateTestHandler"));
exports.GENERATE_TEST_SCRIPT = ["generate-test <name>", "gtest <name>"];
exports.GENERATE_TEST_DESCRIPTION = "Generate test file";
function generateTest() {
    return {
        name: exports.GENERATE_TEST_SCRIPT,
        description: exports.GENERATE_TEST_DESCRIPTION,
        builder: generateTestBuilder_1.default,
        handler: generateTestHandler_1.default,
    };
}
exports.default = generateTest;
