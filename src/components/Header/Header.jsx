import Logo from "../../../public/Logo.svg";
import styled from "styled-components";
import { Button } from "../Button";
import { Link } from "react-router";

const HeaderContainer = styled.header`
  padding: 15px 40px;

  display: flex;
  justify-content: space-between;

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

  a img{
    width: 60%;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <div>
        <Button
          width=""
          height=""
          color="#fff"
          bgcolor="#001454"
          text="Cadastrar"
        />
        <Link to="/login">
          <Button
            width=""
            height=""
            color="#001454"
            bgcolor="#fff"
            text="Entrar"
          />
        </Link>
      </div>
    </HeaderContainer>
  );
};

export { Header };
