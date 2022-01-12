/* eslint-disable */
import * as graphql from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query Get_Pet_List {\n    petList {\n      id\n      identificationNumber\n    }\n  }\n": graphql.Get_Pet_ListDocument,
};

export function gql(source: "\n  query Get_Pet_List {\n    petList {\n      id\n      identificationNumber\n    }\n  }\n"): (typeof documents)["\n  query Get_Pet_List {\n    petList {\n      id\n      identificationNumber\n    }\n  }\n"];

export function gql(source: string): unknown;
export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;