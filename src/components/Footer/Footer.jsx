import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #113f67;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`
const FooterParagrafo = styled.p`
  display: flex;
  text-align: center;
   font-size: 3vmin;
   color: #fff;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterParagrafo>Todos os direitos reservados</FooterParagrafo>
    </FooterContainer>
      
  )
}

export { Footer }