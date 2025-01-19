import styled from "styled-components";
import graphPhoto from "../../../public/graph.svg";
import { Button } from "../Button";

const BlockedMailsGraphContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background-color: #F9F5EB;  
  padding: 40px 0;

  & h2{
    font-size: 6vmin;
    color: #002B5B;
  }
`;

const GraphContainer = styled.div`
  display: flex;
  width: 100%;
  
  img{
    width: 70%; 
  }
`

const BlockedMailsGraph = () => {
  return (
    <>
      <BlockedMailsGraphContainer>
        <h2>EMAILS BLOQUEADOS</h2>
        <GraphContainer>
          <img src={graphPhoto} />
        </GraphContainer>
        <Button
            width="15%"
            height=""
            color="#fff"
            bgcolor="#001454"
            text="VER MAIS"
          />
      </BlockedMailsGraphContainer>
      
    </>
  );
};

export { BlockedMailsGraph };
