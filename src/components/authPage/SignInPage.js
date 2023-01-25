import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useSignIn from "../../hooks/authentication/useSignIn";

import Home from "../HomeStyle";
import { Container } from "./AuthStyles";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { loadingSignIn, signIn } = useSignIn();

  function seeCreateAccount() {
    navigate("/signup");
  }

  async function login(e) {
    e.preventDefault();
  }

  return (
    <Home>
      <Container>
        <h1>Entrar</h1>
        <form onSubmit={login}>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button disabled={loadingSignIn}>Entrar</button>
        </form>
        <h2 onClick={seeCreateAccount}>Não tem uma conta? Crie agora!</h2>
      </Container>
    </Home>
  );
}
