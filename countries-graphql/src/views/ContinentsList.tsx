import React from "react";
import { useQuery, gql } from "@apollo/client";
import { ListItem } from "./ContinentList.styles";
import { Wrapper } from "./ContinentList.styles";

interface Continent {
    name: string;
    code: string;
}

interface ContinentsData {
    continent: Continent[];
}

const CONTINENTS_LIST = gql`
    {
      continents {
        name
        code
      }
    }
  `;



const GetContinents = () => {

    const { data, loading, error } = useQuery<ContinentsData>(CONTINENTS_LIST);
    if (loading) {
        return <p>Loading...</p>;
    }
    const { continents }: any = data;

    return (
        <Wrapper>
            {continents.map((c: any, i: number) => (
                <ListItem to={`/continents/${c.code}`} key={i}>
                    <h2>{c.name}</h2>
                    <p>{c.code}</p>
                </ListItem>
            ))}
        </Wrapper>
    );
};

export default GetContinents;