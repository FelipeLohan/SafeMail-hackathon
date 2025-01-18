import styled from "styled-components";
import PropTypes from "prop-types";
import Notice1 from "../../../public/image10.png";

const AdvertisementsCardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & h3 {
    margin: 0 80px;
    font-size: 3.5vmin;
    color: #002B5B;
  }
`;

const AdvertisementsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 80px;
  padding: 40px 100px;
  background-color: #fff;
  border: 3px solid #113f67;
  border-radius: 12px;
`;

const AdvertisementsCard = (props) => {
  return (
    <>
      <AdvertisementsCardGrid>
        <h3>{props.h3Text}</h3>
        <AdvertisementsCardContainer>
          <img src={props.notice} />
        </AdvertisementsCardContainer>
      </AdvertisementsCardGrid>
    </>
  );
};

export { AdvertisementsCard };
