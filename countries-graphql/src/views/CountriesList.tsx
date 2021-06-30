import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Country } from "./CountriesList.styles";
import { Wrapper } from "./CountriesList.styles";

interface Country {
    name: string;
    code: string;
    capital: string;
    continent: {
        name: string;
    };
}

interface CountryData {
    countries: Country[];
}

interface CountryVariable {
    code: string;
}

const COUNTRIES_QUERY = gql`
  query Counties($code: String) {
    countries(filter: { continent: { eq: $code } }) {
      name
      code
      emoji
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;

const GetCountries = ({ match }: any) => {
    const {
        params: { code },
    } = match;

    const continentCode = code;
    const { data, loading } = useQuery<CountryData, CountryVariable>(
        COUNTRIES_QUERY,
        {
            variables: {
                code: continentCode,
            },
        }
    );

    if (loading) return <p>Loading...</p>;
    const { countries }: any = data;

    return (
        <>

        </>
    );
};

export default GetCountries;