import api from "@/services/api";
import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { MdOutlineArrowBack } from "react-icons/md";
import { useRouter } from "next/router";
export default function Produto() {
  //lembrar de importar o useState
  const [produto, setProduto] = useState({});
  const router = useRouter();

  const getProduto = (id) => {
    api
      .get(`/produtos/${id}`)
      .then(async (res) => {
        let prod = res.data;
        if (prod.foto)
          await api
            .get(`/produtos/upload/${prod.foto}`, {
              responseType: "blob",
            })
            .then((res) => {
              const { data } = res;
              prod.preview = URL.createObjectURL(data);
            });
        setProduto(prod);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const _id = Number(router.query.id);
    if (!isNaN(_id)) {
      getProduto(_id);
    }
  }, [router.query.id]);

  return (
    <Container
      fluid
      style={{
        margin: "auto",
        display: "grid",
        padding: "2rem",
      }}
    >
      <h5>Detalhes do Produto</h5>
      <Row style={{ alignItems: "center", padding: "1rem" }}>
        <Col md={6} style={{ textAlign: "center" }}>
          <a href="/listagem" style={{ verticalAlign: "top", float: "left" }}>
            <MdOutlineArrowBack />
          </a>
          <Image
            src={produto.preview ?? "https://encurtador.com.br/h8cW7"}
            style={{ objectFit: "cover" }}
            rounded
            fluid
          />
        </Col>
        <Col
          md={5}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            padding: "1rem",
          }}
        >
          <Row style={{ alignItems: "center" }}>
            <Image
              src="https://encurtador.com.br/h8cW7"
              style={{ width: "60px" }}
              alt="Imagem"
              roundedCircle
            />
            <span style={{ width: "fit-content" }}>Nome da Loja</span>
          </Row>

          <h2>{produto.nome}</h2>
          <h6>Categorias</h6>
          <h5>{produto.descricao}</h5>
          <h3 style={{ color: "greenyellow" }}>R$ {produto.preco}</h3>
          <Button> Entrar em contato</Button>
        </Col>
      </Row>
    </Container>
  );
}
