import Logo from "../../../public/Logo.svg";
import styled from "styled-components";
import { Link } from "react-router";
import { Button } from "../Button";

const HeaderContainer = styled.header`
  padding: 15px 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #f3f9fb;

  img {
    width: 100%;
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  a img {
    width: 60%;
  }

  h1{
    color: #002B5B;
    font-size: 5vmin;
`;

const HeaderControlPanel = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <h1>Painel de Controle</h1>
      <Button
            width="8%"
            height=""
            color="#fff"
            bgcolor="#001454"
            text="Suporte"
          />
    </HeaderContainer>
  );
};

export { HeaderControlPanel };
