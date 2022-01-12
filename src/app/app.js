"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyComponent = void 0;
var gql_1 = require("@my/gql");
var client_1 = require("@apollo/client");
var react_1 = __importDefault(require("react"));
var PET_LIST = (0, gql_1.gql)("\n  query Get_Pet_List {\n    petList {\n      id\n      identificationNumber\n    }\n  }\n");
var MyComponent = function () {
    var _a, _b;
    var data = (0, client_1.useQuery)(PET_LIST).data;
    return react_1.default.createElement(react_1.default.Fragment, null, (_b = (_a = data === null || data === void 0 ? void 0 : data.petList) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.id);
};
exports.MyComponent = MyComponent;
