import { Button } from "../Button";
import styled from "styled-components";

const HeroBannerContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #3a6ad6, #2d8bba);
  text-align: center;
  padding: 200px 60px;
  gap: 40px;

  h1{
    font-size: 7vmin;
    color: #fff;
  }

  
`;

const HeroBanner = () => {
  return (
    <>
      <HeroBannerContainer>
        <h1>
          Mantenha o foco na gestão do seu negócio.
          <br />
          Deixe a segurança do seu e-mail com a gente.
        </h1>
        <Button
          width="25%"
          height="100%"
          color="#fff"
          bgcolor="#001454"
          text="FALE AGORA COM UM ESPECIALISTA"
        />
      </HeroBannerContainer>
    </>
  );
};

export { HeroBanner };
