import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function CardPokemon({ id }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    if (id > 0 && id < 1026)
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + id)
        .then((response) => {
          setPokemon(response.data);
        })
        .catch((err) => {
          //   alert("Erro ao fazer requisição");
          console.log("Erro no id: ", id);
          console.log(err);
        });
  }, [id]);

  return (
    <>
      {!!pokemon && (
        <div className={styles.cardPokemon}>
          <h3>{pokemon.name}</h3>
          <img
            src={
              pokemon.sprites?.other.showdown.front_default ??
              pokemon.sprites?.other.home.front_default
            }
            alt={pokemon.name}
          />
          <span>{pokemon.types?.map((t) => t.type.name).join(", ")}</span>
        </div>
      )}
    </>
  );
}
