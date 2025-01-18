import Logo from "../../../public/Logo.svg";
import styled from "styled-components";
import { Button } from "../Button";

const HeaderContainer = styled.header`
  padding: 15px 40px;

  display: flex;
  justify-content: space-between;

  background-color: #f3f9fb;

  img {
    width: 5%;
  }

  & div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <div>
        <Button
          width=""
          height=""
          color="#fff"
          bgcolor="#001454"
          text="Cadastrar"
        />
        <Button
          width=""
          height=""
          color="#001454"
          bgcolor="#fff"
          text="Entrar"
        />
      </div>
    </HeaderContainer>
  );
};

export { Header };
