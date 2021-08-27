/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPokemon
// ====================================================

export interface GetPokemon_pokemon_weight {
  __typename: "PokemonDimension";
  /**
   * The minimum value of this dimension
   */
  minimum: string | null;
  /**
   * The maximum value of this dimension
   */
  maximum: string | null;
}

export interface GetPokemon_pokemon_height {
  __typename: "PokemonDimension";
  /**
   * The minimum value of this dimension
   */
  minimum: string | null;
  /**
   * The maximum value of this dimension
   */
  maximum: string | null;
}

export interface GetPokemon_pokemon {
  __typename: "Pokemon";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The identifier of this Pokémon
   */
  number: string | null;
  /**
   * The name of this Pokémon
   */
  name: string | null;
  /**
   * The minimum and maximum weight of this Pokémon
   */
  weight: GetPokemon_pokemon_weight | null;
  /**
   * The minimum and maximum weight of this Pokémon
   */
  height: GetPokemon_pokemon_height | null;
  /**
   * The classification of this Pokémon
   */
  classification: string | null;
  /**
   * The type(s) of this Pokémon
   */
  types: (string | null)[] | null;
  /**
   * The type(s) of Pokémons that this Pokémon is resistant to
   */
  resistant: (string | null)[] | null;
  /**
   * The type(s) of Pokémons that this Pokémon weak to
   */
  weaknesses: (string | null)[] | null;
  fleeRate: number | null;
  /**
   * The maximum CP of this Pokémon
   */
  maxCP: number | null;
  /**
   * The maximum HP of this Pokémon
   */
  maxHP: number | null;
  image: string | null;
}

export interface GetPokemon {
  pokemon: GetPokemon_pokemon | null;
}

export interface GetPokemonVariables {
  id?: string | null;
  name?: string | null;
}
