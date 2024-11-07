import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function CardProduto() {
  return (
    <Card style={{ width: "10rem", alignItems: "center" }}>
      <Card.Img
        variant="top"
        src="https://encurtador.com.br/h8cW7"
        alt="Foto"
      />
      <Card.Body style={{ padding: "0.5rem" }}>
        <Card.Title style={{ fontSize: "16px" }}>Nome do produto</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "14px" }}>
          Preço do produto
        </Card.Subtitle>
        <div className="d-grid">
          <Button variant="primary" size="sm">
            <a href="/produto"> Ver mais </a>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
