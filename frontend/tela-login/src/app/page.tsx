"use client";
import { useRouter } from "next/navigation";
import Logo from "@/assets/logoMemora.png";
import Image from "next/image";
import styles from "./page.module.css";
import Input from "@/components/Input/Input";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (password.length < 8) {
      setError("Sua senha precisa ter ao menos 8 dígitos.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password_a: password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // armazenar tokem em localStorage ou cookies
      localStorage.setItem('token', data.token);
      
      // redirecionar para página principal
      router.push("./main");
    } catch (err) {
      setError('Falha ao logar. Tente novamente.');
      console.error('Erro de login:', err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.form}>
          <h1 className={styles.title}>Log in</h1>
          {error && <div className={styles.error}>{error}</div>}
          <form onSubmit={handleLogin}>
            <Input 
              label="Email:" 
              id="usuario" 
              placeholder="Informe seu email" 
              value={email} 
              onChange={(event) => setEmail(event.target.value)} 
              type="email"
              required
            />
            <Input 
              label="Senha:" 
              id="senha" 
              placeholder="Informe sua senha" 
              value={password} 
              onChange={(event) => setPassword(event.target.value)} 
              type="password"
              required
              minLength={8}
            />

            <Link href="./main" className={styles.forgotPassword}>Esqueceu sua senha?</Link>

            <button 
              className={styles.button} 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Logando...' : 'Log in'}
            </button>
          </form>
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