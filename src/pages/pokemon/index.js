import CardPokemon from "@/components/CardPokemon";
import styles from "@/styles/pokemon.module.css";

export default function Pokemon() {
  const pokemons = [369, 303, 7, 26, 99, 30, 999, 874];

  return (
    <div className={styles.container}>
      <h4> Pokedex</h4>
      <div className={styles.pokedex}>
        {Array.from({ length: 1025 }, (x, p) => (
          <div key={p}>
            <CardPokemon id={p + 1} />
          </div>
        ))}
      </div>
    </div>
  );
}
