"use client";
import Header from "@/components/Header/header";
import styles from "./main.module.css";
import GreenLeftBar from "@/components/GreenLeftBar/GreenLeftBar";
import Menu from "@/components/Menu/Menu";
import List from "@/components/List/List";
import { useEffect, useState } from "react";
import Avatar from "@/assets/user-profile.png";
import Shield from "@/assets/shield.png";
import Icon from "@/assets/image-add.png";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";

export default function main() {
  const [page, setPage] = useState("administrador");
  const [icon, setIcon] = useState("Avatar");
  const [items, setItems] = useState<{ id: number; title: string }[]>([]);

  useEffect(() => {
    let endpoint = "";

    if (page === "administrador") endpoint = "/api/administradores";
    else if (page === "permissao") endpoint = "/api/permissoes";
    else if (page === "publicacao") endpoint = "/api/publicacoes";

    fetch(`http://localhost:5000${endpoint}`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Erro ao carregar dados:", err));
  }, [page]);

  return (
    <ProtectedRoute>
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
          <GreenLeftBar />

          <div className={styles.content}>
            <nav className={styles.navbar}>
              <h1
                className={styles.option}
                onClick={() => {
                  setPage("administrador");
                  setIcon("Avatar");
                }}
              >
                Administradores
              </h1>
              <h1
                className={styles.option}
                onClick={() => {
                  setPage("permissao");
                  setIcon("Shield");
                }}
              >
                Permissões
              </h1>
              <h1
                className={styles.option}
                onClick={() => {
                  setPage("publicacao");
                  setIcon("Icon");
                }}
              >
                Publicações
              </h1>
            </nav>
            <Menu page={page} />
            <ul className={styles.data}>
              {items.map((item) => (
                <List key={item.id} icon={icon} name={item.title} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
