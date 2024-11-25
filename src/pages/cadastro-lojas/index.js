import api from "@/services/api";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CadastroLojas() {
  const [loja, setLoja] = useState({});
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, endereco, foto } = e.target;
    var lojaSalvar = {
      nome: nome.value,
      endereco: endereco.value,
    };
    api
      .post("/lojas/", lojaSalvar)
      .then((res) => {
        console.log(res);
        alert("Loja salva com sucesso!");
        router.push("/listagem-lojas");
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao salvar a loja!");
        alert(err?.response?.data?.message ?? err.message);
      });
  };

  return (
    <>
      <h3>Formulário de Cadastro de Lojas</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome: </label>
        <input type="text" id="nome" name="nome" /> <br />
        <label htmlFor="endereco">Endereço: </label>
        <input type="text" id="endereco" name="endereco" /> <br />
        <label htmlFor="foto">Foto: </label>
        <input type="file" id="foto" name="foto" /> <br />
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}
