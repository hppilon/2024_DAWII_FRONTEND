import styles from "./styles.module.css";
import { useRouter } from "next/router";
import api from "@/services/api";

export default function CardLoja({ loja }) {
  const router = useRouter();
  const excluirLoja = (id) => {
    api
      .delete(`lojas/${id}`)
      .then((res) => {
        alert("Loja excluída com sucesso");
        router.reload();
      })
      .catch((err) => alert("Erro ao excluir"));
  };

  const editarLoja = (id) => {
    router.push("/editar-loja/" + id);
  };

  return (
    <div className={styles.container}>
      <p>{loja.nome}</p>
      <span>{loja.endereco}</span>
      <button
        type="button"
        className={styles.btnEditar}
        onClick={() => editarLoja(loja.id)}
      >
        Editar
      </button>
      <button
        type="button"
        className={styles.btnExcluir}
        onClick={() => excluirLoja(loja.id)}
      >
        Excluir
      </button>
    </div>
  );
}
