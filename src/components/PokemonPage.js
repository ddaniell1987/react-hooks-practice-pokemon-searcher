import React, {useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const 
  state={
    allPokemons: [],
    searchTerm: " "
  }
  useEffect(() => {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(allPokemons => this.setState({ allPokemons: allPokemons }))
    .catch(e => console.error(e))
})

function handleSearchChange(e, { value }) {
  this.setState({ searchTerm: value })
}

function addPokemon(pokemon) {
  this.setState({ allPokemons: [pokemon, ...this.state.allPokemons] })
}

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection />
    </Container>
  );
}

export default PokemonPage;
