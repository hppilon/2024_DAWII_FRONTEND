import api from "@/services/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function EditarLoja() {
  const [loja, setLoja] = useState({});
  const [_id, setId] = useState(0);

  const router = useRouter();

  const getLoja = (id) => {
    api
      .get("/lojas/" + id)
      .then((result) => setLoja(result.data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, endereco, foto } = e.target;
    var lojaSalvar = {
      nome: nome.value,
      endereco: endereco.value,
    };
    api
      .put(`/lojas/${_id}`, lojaSalvar)
      .then((res) => {
        console.log(res);
        alert("Loja editada com sucesso!");
        router.push("/listagem-lojas");
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao salvar a loja!");
        alert(err?.response?.data?.message ?? err.message);
      });
  };

  useEffect(() => {
    const _id = Number(router.query.id);
    if (!isNaN(_id)) {
      setId(_id);
      getLoja(_id);
    }
  }, []);

  return (
    <>
      <h3>Formulário de Cadastro de Lojas</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome: </label>
        <input
          type="text"
          id="nome"
          name="nome"
          defaultValue={loja.nome}
        />{" "}
        <br />
        <label htmlFor="endereco">Endereço: </label>
        <input
          type="text"
          id="endereco"
          name="endereco"
          defaultValue={loja.endereco}
        />{" "}
        <br />
        <label htmlFor="foto">Foto: </label>
        <input type="file" id="foto" name="foto" /> <br />
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}
