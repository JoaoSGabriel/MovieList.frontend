import styled from "styled-components";
import useToken from "../../hooks/useToken";
import AccountManage from "./AccountManage";
import LoginManage from "./LoginManage";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Navbar() {
  const token = useToken();

  return (
    <Container>
      <Wrappler>
        <Logo />
        <Nav />
        {token ? <LoginManage /> : <AccountManage />}
      </Wrappler>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 75px;
  justify-content: center;
  transition: background 0.8s ease, color 0.2s;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  background: #2b2d42;
  color: #bcbedc;
`;

const Wrappler = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 50px;
  max-width: 1440px;
  width: 100%;
`;
