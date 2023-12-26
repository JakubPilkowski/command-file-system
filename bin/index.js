#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const file_system_cache_1 = __importDefault(require("file-system-cache"));
const path_1 = __importDefault(require("path"));
const fs = __importStar(require("fs"));
const CONSTANTS_1 = require("./core/CONSTANTS");
const readConfig_1 = __importDefault(require("./core/readConfig"));
const isFileTemplate_1 = __importDefault(require("./utils/isFileTemplate"));
const mapVariables_1 = __importDefault(require("./utils/mapVariables"));
const yargsInstance = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .scriptName(CONSTANTS_1.CONSTANTS.CLI_NAME)
    .usage("$0 <cmd> [args]");
const cache = (0, file_system_cache_1.default)({
    basePath: "./.cache/cfs",
    ns: "my-namespace",
    hash: "sha1",
    ttl: 0,
});
let templateCommands = ["index"];
const init = (argv) => {
    (0, readConfig_1.default)().then((config) => {
        console.log("config read successfully");
    });
};
const builder = (yargs) => {
    console.log("Start builder...");
    yargs.example("cfs gf index", `generate 'index' template`);
};
const generate = (args) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Start generator...");
    const templateName = args === null || args === void 0 ? void 0 : args.$1;
    const templatesNames = args === null || args === void 0 ? void 0 : args.templates;
    if (!templateName) {
        throw new Error(`Could not generate file. No template was provided`);
    }
    const templateTuple = templatesNames.find((_templateNames) => _templateNames.find((_templateName) => _templateName === templateName));
    if (!templateTuple) {
        throw new Error(`Could not generate file. There is no template config for template: ${templateName}`);
    }
    const config = yield (0, readConfig_1.default)();
    const template = config.templates.find((template) => {
        if (!(0, isFileTemplate_1.default)(template)) {
            return false;
        }
        const templateNames = new Set([template.name, ...template.templateAliases]);
        return templateTuple.find((_templateTupleName) => templateNames.has(_templateTupleName));
    });
    if (!template) {
        throw new Error(`Could not find template '${templateTuple[0]}'.`);
    }
    console.log(`Successfully find template '${templateTuple[0]}' for name '${templateName}'`);
    const { template: t } = template;
    const filePath = args.$2;
    if (!filePath) {
        throw new Error(`Could not generate template '${templateTuple[0]}'. FilePath was not provided`);
    }
    const parsedPath = path_1.default.parse(filePath);
    const mappedTemplate = (0, mapVariables_1.default)(t, {
        name: parsedPath.name,
        ext: parsedPath.ext,
    });
    console.log("Successfully map variables");
    if (parsedPath.dir) {
        fs.mkdirSync(parsedPath.dir, { recursive: true });
    }
    fs.writeFileSync(filePath, mappedTemplate);
    console.log("Successfully generate file");
});
function readFromCache() {
    return __awaiter(this, void 0, void 0, function* () {
        const cacheFileTemplates = (yield cache.get("fileTemplates"));
        if (Array.isArray(cacheFileTemplates)) {
            return cacheFileTemplates;
        }
        else {
            return readFromConfig();
        }
    });
}
function readFromConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Reading config...");
        const config = yield (0, readConfig_1.default)();
        const templates = config.templates;
        const fileTemplateNames = new Map([]);
        console.log("Read file templates...");
        for (let i = 0; i < templates.length; i++) {
            const template = templates[i];
            if ((0, isFileTemplate_1.default)(template)) {
                const { templateName, templateAliases } = template;
                if (fileTemplateNames.has(templateName)) {
                    throw new Error(`Could not read template ${JSON.stringify(template)}. Template with name ${templateName} already exist`);
                }
                fileTemplateNames.set(templateName, [templateName, ...templateAliases]);
            }
        }
        console.log("Successfully read template names");
        const result = Array.from(fileTemplateNames.values());
        return result;
    });
}
yargsInstance
    .command(["generate-file $1 $2", "gf", "f"], "Generate file based on given template", builder, generate)
    .middleware((argv) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Start middleware...");
    const configFilePath = path_1.default.resolve("src/cfs.config.ts");
    if (!configFilePath) {
        throw new Error(`Could not resolve config file.`);
    }
    const cacheModifyDate = (yield cache.get("cacheModifyDate"));
    const currentModifyDate = fs.statSync(configFilePath).mtimeMs;
    let templates;
    if (cacheModifyDate) {
        console.log("Detect modification date cache. Start detection...");
        if (currentModifyDate > cacheModifyDate) {
            console.log("Detect config changes. Loading new templates...");
            cache.set("cacheModifyDate", currentModifyDate);
            const fileTemplateNames = yield readFromConfig();
            cache.set("fileTemplates", fileTemplateNames);
            templates = fileTemplateNames;
        }
        else {
            console.log("No changes detected. Reading templates from cache...");
            const fileTemplateNames = yield readFromCache();
            cache.set("fileTemplates", fileTemplateNames);
            templates = fileTemplateNames;
        }
    }
    else {
        console.log("No cache. Loading templates from config...");
        cache.set("cacheModifyDate", currentModifyDate);
        const fileTemplateNames = yield readFromConfig();
        cache.set("fileTemplates", fileTemplateNames);
        templates = fileTemplateNames;
    }
    if (templates.length === 0) {
        throw new Error(`Could not find any templates in config file.`);
    }
    console.log("Passing templates to generator...");
    argv.templates = templates;
}), true)
    .help("h")
    .alias("h", "help").argv;
