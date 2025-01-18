import styled from "styled-components";
import PropTypes from "prop-types";

const Cell = (props) => {
  const CellContainer = styled.input`
    type: ${props.format};
    width: ${props.width};
    height: ${props.height};
    margin-top: ${props.topMargin};

    border: 0;
    border-radius: 10px;
    background: white;
    padding: 20px;
    margin-bottom: 30px;
    
    &::placeholder {
    color: #001454;
    margin-top: 50px;
    font-size: 1.8vmin;
    }
  `;

  return (
    <>
      <CellContainer placeholder={props.text} />
    </>
  );
};

Cell.PropTypes = {
  format: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  text: PropTypes.string,
  topMargin: PropTypes.string,
};

export { Cell };
