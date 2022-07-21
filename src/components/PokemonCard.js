import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  return (


<Card className= "ui-card">
        <div className="content">
          <div className="header" key={pokemon.id}
            onClick={() => console.log('add click event')}>{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            <img src={pokemon.image} alt="pokemon" />
          </span>
        </div>
      
    </Card>
  );
}

export default PokemonCard;
