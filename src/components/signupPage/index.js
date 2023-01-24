import { useState } from "react";

import Home from "../HomeStyle";
import { Container } from "./SignupStyles";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  function createAccount(e) {
    e.preventDefault();
  }

  return (
    <Home>
      <Container>
        <h1>Crie sua conta</h1>
        <form onSubmit={createAccount}>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Nome de usuário"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Repita a senha"
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          <button>Criar</button>
        </form>
      </Container>
    </Home>
  );
}
