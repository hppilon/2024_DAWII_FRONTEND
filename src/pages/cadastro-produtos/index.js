import api from "@/services/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function CadastroProdutos() {
  const router = useRouter();
  const [lojas, setLojas] = useState([]);

  const getLojas = () => {
    api
      .get("/lojas")
      .then((result) => setLojas(result.data))
      .catch((err) => console.log(err));
  };

  const salvarImagem = (id, file) => {
    const formData = new FormData();
    formData.append("file", file);

    api
      .post("/produtos/upload", formData, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response);
        const { file } = response.data;
        api
          .put(`/produtos/${id}`, { foto: file.filename })
          .then((res) => {
            console.log("Foto atualizada");
            router.push("/listagem");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log("Erro ao adicionar foto", err);
      });
  };

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

        if (foto.files) {
          const fotoSalvar = foto.files[0];
          console.log(fotoSalvar);
          salvarImagem(res.data.id, fotoSalvar);
        }
        alert("Produto salvo com sucesso!");
        //router.push("/listagem");
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao salvar o produto!");
        alert(err?.response?.data?.message ?? err.message);
      });
  };

  useEffect(() => {
    getLojas();
  }, []);

  return (
    <>
      <h3>Formulário de Cadastro de Produtos</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome: </label>
        <input type="text" id="nome" name="nome" /> <br />
        <label htmlFor="descricao">Descrição: </label>
        <textarea id="descricao" name="descricao" /> <br />
        <label htmlFor="preco">Preço: </label>
        <input type="number" step="any" id="preco" name="preco" />
        <br />
        <label htmlFor="lojaId">Loja: </label>
        <select name="lojaId" id="lojaId">
          <option>Selecione a loja: </option>
          {lojas.length > 0 &&
            lojas.map((loja) => <option value={loja.id}>{loja.nome}</option>)}
        </select>
        <br />
        <label htmlFor="foto">Foto: </label>
        <input
          type="file"
          id="foto"
          name="foto"
          accept={"image/png, image/jpg, image/jpeg"}
        />
        <br />
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}
