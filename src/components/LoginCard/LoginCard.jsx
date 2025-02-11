import { Link } from "react-router";
import styled from "styled-components";

const LoginCardContainer = styled.div`
  
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 30%;
  background-color: #fff;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 10%;

  h2{
    color: #003049;
    font-size: 4vmin;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 30px;
  }

  form input, button{
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    outline: none;
  }

  form input{
    border: 1px solid #003049;
    
  }

  form button{
  background-color: #3483FA;
  color: #fff;
  font-size: 2.2vmin;
  border: none;
  
  }
`;

const LoginCard = () => {
  return (
    <>
      <LoginCardContainer>
        <h2>Login</h2>
        <form>
          <input placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <Link to="/control-panel">
          <button>Entrar</button>
          </Link>
        </form>
      </LoginCardContainer>
    </>
  );
};

export { LoginCard };
