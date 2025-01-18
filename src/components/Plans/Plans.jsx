import { PlanCard } from "../PlanCard";
import styled from "styled-components";

const PlansContainer = styled.section`
  display: flex;
  gap: 40px;
  justify-content: center;
  width: 100%;
`;

const PlansGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
  margin-bottom: 100px;

  h2 {
    font-size: 5vmin;
    margin-top: 50px;
    margin-bottom: 35px;
    color: #002B5B;
  }
`;

const Plans = () => {
  return (
    <>
      <PlansGrid>
        <h2>Quanto você acha que custa sua segurança?</h2>
        <PlansContainer>
          <PlanCard
            titulo="Standart"
            beneficio1="- Relatório trimestral"
            beneficio2="- Blacklist manual"
            beneficio3="- Sem notificação de suspeita"
            ButtonText="Assine já"
            text="Gratuito"
            margin="120px"
          />
          <PlanCard
            titulo="Premium"
            beneficio1="- Relatório mensal"
            beneficio2="- Blacklist automática"
            beneficio3="- Notificação de suspeita"
            ButtonText="Assine já"
            text="Apenas R$19,90"
            margin="120px"
          />
          <PlanCard
            titulo="Empresas"
            beneficio1="- Painel de controle total"
            beneficio2="- Relatório personalizado"
            beneficio3="- Prioridade no suporte"
            beneficio4="- Análise por IA"
            beneficio5="- Treinamento para sua equipe"
            beneficio6="- Central de WhiteList/BlackList "
            ButtonText="Converse Conosco"
            text="Preço pro seu negócio"
            margin="40px"
          />
        </PlansContainer>
      </PlansGrid>
    </>
  );
};

export { Plans };
