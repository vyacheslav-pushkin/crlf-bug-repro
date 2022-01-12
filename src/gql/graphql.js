"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Get_Pet_ListDocument = void 0;
exports.Get_Pet_ListDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "Get_Pet_List" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "petList" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "identificationNumber" } }] } }] } }] };
