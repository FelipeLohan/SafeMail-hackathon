import styled from "styled-components";
import ProfilePhoto from "../../../public/profile.jpg";
styled;

const ProfileBannerContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: #113f67;
  text-align: center;
  padding: 120px 60px;
  gap: 40px;

  h3 {
    font-size: 6vmin;
    color: #fff;
  }
  
  p {
    font-size: 4vmin;
    color: #c2c2c2;
  }

  img{
  width: 250px;
    border: 1px solid #000;
    border-radius: 50%;
  }
`;

const ProfileBanner = () => {
  return (
    <>
      <ProfileBannerContainer>
        <div>
          <img src={ProfilePhoto} />
        </div>
        <div>
          <h3>IMD - Code81</h3>
          <p>Central da conta</p>
          <p>Editar perfil</p>
        </div>
      </ProfileBannerContainer>
    </>
  );
};

export { ProfileBanner };
