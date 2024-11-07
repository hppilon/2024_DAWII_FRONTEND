import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { MdOutlineArrowBack } from "react-icons/md";
export default function Produto() {
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
            src="https://encurtador.com.br/h8cW7"
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

          <h2>Nome do produto</h2>
          <h6>Categorias</h6>
          <h5>Descrição do produto</h5>
          <h3 style={{ color: "greenyellow" }}>R$ XX,XX</h3>
          <Button> Entrar em contato</Button>
        </Col>
      </Row>
    </Container>
  );
}
