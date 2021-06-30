import React from "react";
import { useQuery, gql } from "@apollo/client";

interface Continent {
    name: string;
    code: string;
}

interface ContinentsData {
    continent: Continent[];
}

const LIST_CONTINENTS = gql`
    {
      continents {
        name
        code
      }
    }
  `;

const GetContinents = () => {

    const { data, loading, error } = useQuery<ContinentsData>(LIST_CONTINENTS);
    if (loading) {
        return <p>Loading...</p>;
    }
    const { continents }: any = data;

    return (
        <>
            Continents List
        </>
    );
};

export default GetContinents;