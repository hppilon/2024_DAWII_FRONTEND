import CardProduto from "@/components/CardProduto";
import api from "@/services/api";
import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function Listagem() {
  const [produtos, setProdutos] = useState([]);

  const getProdutos = () => {
    api
      .get("/produtos")
      .then(async (result) => {
        var listaProdutos = result.data;

        //para cada item da lista de produtos, criar uma pré-visualização da imagem
        for (let prod of listaProdutos) {
          if (prod.foto)
            await api
              .get(`/produtos/upload/${prod.foto}`, {
                responseType: "blob",
              })
              .then((res) => {
                const { data } = res;
                prod.preview = URL.createObjectURL(data);
              });
        }

        setProdutos(listaProdutos);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <Container fluid style={{ padding: "1rem 1rem", gap: "1rem" }}>
      <h3>Listagem</h3>
      <Row>
        {produtos.map((p) => (
          <Col style={{ padding: "0.5rem", justifyItems: "center" }}>
            <CardProduto produto={p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
