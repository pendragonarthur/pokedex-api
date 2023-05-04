import "./App.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";

function App() {
  const [pokeName, setPokeName] = useState("");
  const [pokeData, setPokeData] = useState({
    id: pokeName.id,
    name: pokeName.name,
    height: pokeName.height,
    weight: pokeName.weight,
  });

  const handleFetchPokemon = (e) => {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
      .then((response) => response.json())
      .then(setPokeData);
  };

  const handleCardOpen = () => {
    window.open(
      `https://bulbapedia.bulbagarden.net/wiki/${pokeData.name}_(Pokémon)`
    );
  };

  function showPokemon() {
    if (pokeData.id) {
      return (
        <div className="card-container">
          <div className="image-container" onClick={handleCardOpen}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`}
              alt="Pokemon Type Image"
            />
          </div>
          <p className="card-text" id="card-text-1">
            {pokeData.name}
          </p>
          <p className="type-text">{pokeData.types[0].type.name}</p>
          <p className="card-text" id="card-text-2">
            <strong>Pokedéx ID:</strong> {pokeData.id}
          </p>

          <p className="card-text" id="card-text-3">
            <strong>Weight</strong> (in hectograms): {pokeData.weight}
          </p>
          <p className="card-text" id="card-text-4">
            <strong>Height</strong> (in decimetres): {pokeData.height}
          </p>
        </div>
      );
    }
  }

  return (
    <Container fluid>
      <Header />
      <form method="GET" onSubmit={handleFetchPokemon} className="search-form">
        <label htmlFor="pokemon" className="form-label">
          Search your pokemon:
        </label>
        <input
          placeholder="Ditto, Eevee, Pidgey..."
          className="form-input"
          value={pokeName}
          onChange={(e) => setPokeName(e.target.value)}
          id="pokemon"
        />
        {showPokemon()}
      </form>
    </Container>
  );
}

export default App;
