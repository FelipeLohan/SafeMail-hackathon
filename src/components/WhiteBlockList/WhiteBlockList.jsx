import styled from "styled-components";
import Card1 from "../../../public/Card1.svg";
import Card2 from "../../../public/Card2.svg";

const WhiteBlockListContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: start;
  gap: 20px;
  width: 30%;
  margin: 0 auto;
  margin-top: 40px;
`;

const WhiteBlockList = () => {
  return (
    <>
      <WhiteBlockListContainer>
        <img src={Card1} alt="Card 1" />
        <img src={Card2} alt="Card 2" />
      </WhiteBlockListContainer>
    </>
  );
};

export { WhiteBlockList };
