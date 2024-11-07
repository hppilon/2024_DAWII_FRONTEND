import CardProduto from "@/components/CardProduto";
import { Row, Col, Container } from "react-bootstrap";

export default function Listagem() {
  //simulando uma lista com 12 produtos
  const produtos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Container fluid style={{ padding: "1rem 1rem", gap: "1rem" }}>
      <h3>Listagem</h3>
      <Row>
        {produtos.map((p) => (
          <Col style={{ padding: "0.5rem", justifyItems: "center" }}>
            <CardProduto />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
