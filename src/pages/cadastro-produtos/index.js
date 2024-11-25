import api from "@/services/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Form.module.css";

export default function CadastroProdutos() {
  const [lojas, setLojas] = useState([]);
  const [produto, setProduto] = useState({});

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, descricao, preco, foto, lojaId } = e.target;
    var produtoSalvar = {
      nome: nome.value,
      descricao: descricao.value,
      preco: preco.value,
      lojaId: lojaId.value,
    };
    api
      .post("/produtos/", produtoSalvar)
      .then((res) => {
        console.log(res);
        alert("Produto salvo com sucesso!");
        router.push("/listagem");
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao salvar o produto!");
        alert(err?.response?.data?.message ?? err.message);
      });
  };

  const getLojas = () => {
    api
      .get("/lojas/")
      .then((result) => {
        setLojas(result.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getLojas();
  }, []);

  return (
    <div className={styles.container}>
      <h3>Formulário de Cadastro de Produtos</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome: </label>
        <input type="text" id="nome" name="nome" /> <br />
        <label htmlFor="descricao">Descrição: </label>
        <input type="text" id="descricao" name="descricao" /> <br />
        <label htmlFor="preco">Preço: </label>
        <input type="number" id="preco" name="preco" /> <br />
        <label htmlFor="lojaId">Loja: </label>
        <select name="lojaId" id="lojaId">
          {lojas.map((loja) => (
            <option value={loja.id}>{loja.nome}</option>
          ))}
        </select>
        <br />
        <label htmlFor="foto">Foto: </label>
        <input type="file" id="foto" name="foto" /> <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
