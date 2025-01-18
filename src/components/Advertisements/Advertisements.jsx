import styled from "styled-components";
import { AdvertisementsCard } from "../AdvertisementsCard";
import Notice1 from "../../../public/image10.png";
import Notice2 from "../../../public/image11.png";
import Notice3 from "../../../public/image12.png";

const AdvertisementsContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const AdvertisementsInverseCard = styled.div`
  display: flex;
  justify-content: end;
`;

const Advertisements = () => {
  return (
    <>
      <AdvertisementsContainer>
        <AdvertisementsCard h3Text="Emails de Pishing, já faliu empresas!" notice={Notice1} />
        <AdvertisementsInverseCard>
          <AdvertisementsCard h3Text="Nosso Objetivo é impedir isso!" notice={Notice2} />
        </AdvertisementsInverseCard>
        <AdvertisementsCard h3Text="Mudamos o jeito de como os emails são protegidos!" notice={Notice3} />
      </AdvertisementsContainer>
    </>
  );
};

export { Advertisements };
