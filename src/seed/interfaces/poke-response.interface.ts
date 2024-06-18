export interface PokeResponse {
  count: number;
  next: null | string;
  previous: null | string;
  results: PokemonData[];
}

export interface PokemonData {
  name: string;
  url: string;
}
