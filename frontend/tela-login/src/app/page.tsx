"use client";
import { useRouter } from "next/navigation";
import Logo from "@/assets/logoMemora.png";
import Image from "next/image";
import styles from "./page.module.css";
import Input from "@/components/Input/Input";
import { useState } from "react";
import Link from "next/link";

export default function Home() {

  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");

  const router = useRouter();

  function Logar() {
    if(senha.length < 8) {
      alert("Sua senha precisa ter no mínimo 8 dígitos!");
    }

    router.push("/main");
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.form}>
          <h1 className={styles.title}>Log in</h1>
          <Input label="Email:" id="usuario" placeholder="Informe o seu nome de usuário" value={user} onChange={(event) => setUser(event.target.value)} type="text"/>
          <Input label="Senha:" id="senha" placeholder="Informe a sua senha de 8 dígitos" value={senha} onChange={(event) => setSenha(event.target.value)} type="password"/>

          <Link href="./main" className={styles.forgotPassword}>Esqueceu a senha?</Link>

          <button className={styles.button} onClick={Logar}>Log in</button>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.logo}>
            <Image src={Logo} alt="Logo" width={250} height={100}/>
          </div>
        </div>
      </div>
    </>
  );
}
