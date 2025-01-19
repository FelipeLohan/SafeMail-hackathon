import Logo from "../../../public/Logo.svg";
import styled from "styled-components";
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

  a img {
    width: 60%;
  }
`;

const HeaderControlPanel = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
    </HeaderContainer>
  );
};

export { HeaderControlPanel };
