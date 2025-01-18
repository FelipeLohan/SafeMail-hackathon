import styled from "styled-components";
import PropTypes from "prop-types";

const Button = (props) => {
  const ButtonContainer = styled.button`
    width: ${props.width};
    height: ${props.height};
    background: ${props.bgcolor};
    color: ${props.color};

    padding: 16px 20px;
    border: 2px solid #001454;
    border-radius: 12px;
    font-size: 2vmin;

    &:hover {
      cursor: pointer;
    }
  `;
  return (
    <>
      <ButtonContainer>{props.text}</ButtonContainer>
    </>
  );
};

Button.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  bgcolor: PropTypes.string,
  text: PropTypes.string,
};

export { Button };
