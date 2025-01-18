import styled from "styled-components";
import { Button } from "../Button";

const PlanCardContainer = styled.div`
  background-color: #226597;
  color: #fff;
  height: 390px;
  display: flex;
  border-radius: 12px;
  flex-direction: column;
  align-items: center;

  width: 17%;

  h3 {
    margin-top: 10px;
    font-size: 5vmin;
  }
`;

const PlanCardBenefits = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  p {
    font-size: 2.5vmin;
  }
`;

const PlanCard = (props) => {

  const CtaPrice = styled.div`
  margin-top: ${props.margin};
  width: 70%;

  & p{
    margin-bottom: 10px;
    font-size: 2.2vmin;
  }
`

  return (
    <>
      <PlanCardContainer>
        <h3>{props.titulo}</h3>
        <PlanCardBenefits>
          <p>{props.beneficio1}</p>
          <p>{props.beneficio2}</p>
          <p>{props.beneficio3}</p>
          <p>{props.beneficio4}</p>
          <p>{props.beneficio5}</p>
          <p>{props.beneficio6}</p>
        </PlanCardBenefits>
        <CtaPrice>
          <p>{props.text}</p>
          <Button
            width="100%"
            height=""
            color="#fff"
            bgcolor="#001454"
            text={props.ButtonText}
          />
        </CtaPrice>
      </PlanCardContainer>
    </>
  );
};

export { PlanCard };
