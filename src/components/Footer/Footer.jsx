import styled from "styled-components";

const FooterContainer = styled.footer`
  background: linear-gradient(90deg, #3a6ad6, #2d8bba);
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;
const FooterParagrafo = styled.p`
  display: flex;
  text-align: center;
  font-size: 3vmin;
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterParagrafo>Todos os direitos reservados</FooterParagrafo>
    </FooterContainer>
  );
};

export { Footer };
