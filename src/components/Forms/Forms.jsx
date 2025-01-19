import styled from "styled-components";
import { Cell } from "../Cell";
import { Button } from "../Button";

const FormGrid = styled.div`
  width: 100%;
`;

const FormsContainer = styled.form`
  display: flex;
  background: linear-gradient(90deg, #3a6ad6, #2d8bba);
  width: 60%;
  height: 600px;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  border-radius: 15px;
  margin-top: 100px;
  margin-bottom: 100px;
  
 
}

`;

const InputContainer = styled.form`
  width: 80%;
  margin-top: 65px;
`;

const DoubleInputs = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 40px;
`;
const FormsTitle = styled.h1`
  margin-top: 45px;
  font-size: 6vmin;
  color: #fff;
`;
const Forms = () => {
  return (
    <>
      <FormGrid>
        <FormsContainer>
          <FormsTitle>Agende uma conversa com nosso time </FormsTitle>
          <InputContainer>
            <Cell
              format="email"
              width="100%"
              heigth="100px"
              text="Digite seu Email"
            />
            <DoubleInputs>
              <Cell
                format="text"
                width="50%"
                heigth="100px"
                text="Digite seu nome:"
              />
              <Cell
                format="text"
                width="50%"
                heigth="100px"
                text="Digite seu sobrenome:"
              />
            </DoubleInputs>
            <Cell
              format="text"
              width="100%"
              heigth="100px"
              text="Digite seu telefone com DDD:"
            />
            <Cell
              format="text"
              width="100%"
              heigth="100px"
              text="Conte um pouco da sua necessidade:"
            />
            <Button
              width=""
              height=""
              color="#fff"
              bgcolor="#001454"
              text="ENVIAR"
            />
          </InputContainer>
        </FormsContainer>
      </FormGrid>
    </>
  );
};

export { Forms };
