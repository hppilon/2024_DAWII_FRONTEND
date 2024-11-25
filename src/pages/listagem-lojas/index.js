import api from "@/services/api";
import { useEffect, useState } from "react";
import styles from "@/styles/Lista.module.css";
import CardLoja from "@/components/CardLoja";

export default function ListagemLojas() {
  const [lojas, setLojas] = useState([]);

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
    <>
      <h3>Listagem de Lojas</h3>
      <div className={styles.container}>
        {lojas?.length > 0 && lojas.map((loja) => <CardLoja loja={loja} />)}
      </div>
    </>
  );
}
