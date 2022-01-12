import {gql} from "@my/gql";
import {useQuery} from "@apollo/client";
import React from "react";

const PET_LIST = gql(`
  query Get_Pet_List {
    petList {
      id
      identificationNumber
    }
  }
`);

export const MyComponent = () => {
  const {data} = useQuery(PET_LIST);

  return <>{data?.petList?.[0]?.id}</>;
};
