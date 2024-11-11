import styles from "@/styles/Form.module.css";
import { useEffect, useState } from "react";

export default function Form() {
  const [title, setTitle] = useState("Título inicial");

  const handleSubmit = (e) => {
    e.preventDefault();
    //atributo name do input
    const { nome, preco, descricao, foto } = e.target;

    alert(
      "Valores recebidos: " +
        nome.value +
        ", " +
        preco.value +
        ", " +
        descricao.value
    );
  };

  useEffect(() => {
    alert("Página carregada pela primeira vez");
  }, []);

  useEffect(() => {
    if (title == "teste") alert("Título alterado para " + title);
  }, [title]);

  return (
    <div className={styles.container}>
      <p>{title}</p>
      <form onSubmit={handleSubmit} className={styles.formCadastro}>
        <input type="text" id="nome" name="nome" placeholder="Nome" />
        <input type="number" id="preco" name="preco" placeholder="Preço" />
        <textarea
          type="text"
          id="descricao"
          name="descricao"
          placeholder="Descrição"
        />
        <input type="file" id="foto" name="foto" />
        <button type="submit">Adicionar</button>
      </form>

      <div className={styles.teste}>
        <input
          type="text"
          id="titulo"
          name="titulo"
          placeholder="Titulo"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </div>
  );
}
