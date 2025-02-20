import styled from "styled-components";
import FormLogin from "./Componentes/FormLogin";

const BackgroundFormulario = styled.main `
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FEFAE0;
`;

const App = () => {
  return (
    <>
      <BackgroundFormulario>
        <FormLogin />
      </BackgroundFormulario>
    </>
  );
}

export default App;
