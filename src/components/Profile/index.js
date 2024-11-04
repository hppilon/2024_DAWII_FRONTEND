import styles from "./styles.module.css";

export default function Profile({ foto, nome }) {
  return (
    <div className={styles.container}>
      <img
        src={
          foto ??
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYpZE1PNBwJy7Reqf3Y7MSvLtG40M-KNLGA&s"
        }
        alt="Imagem"
        className={styles.imagem}
      />
      <p>{nome ?? "Teste"}</p>
    </div>
  );
}
