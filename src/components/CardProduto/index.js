import api from "@/services/api";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";

export default function CardProduto({ produto }) {
  const router = useRouter();
  const deletarProduto = (id) => {
    api
      .delete(`produtos/${id}`)
      .then((res) => {
        alert("Produto excluído com sucesso");
        router.reload();
      })
      .catch((err) => alert("Erro ao excluir"));
  };
  return (
    <Card style={{ width: "10rem", alignItems: "center" }}>
      <Card.Img
        variant="top"
        src={produto.preview ?? "https://encurtador.com.br/h8cW7"}
        alt="Foto"
      />
      <Card.Body style={{ padding: "0.5rem" }}>
        <Card.Title style={{ fontSize: "16px" }}>{produto.nome}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "14px" }}>
          {produto.preco}
        </Card.Subtitle>
        <p>{produto.descricao}</p>
        <div className="d-grid">
          <Button variant="success" size="sm">
            <a href={`/produto/${produto.id}`}> Ver mais </a>
          </Button>
          <Button variant="primary" size="sm">
            <a href={`/editar-produto/${produto.id}`}> Editar</a>
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => deletarProduto(produto.id)}
          >
            Excluir
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
