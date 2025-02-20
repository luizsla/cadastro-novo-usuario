import styled from "styled-components";

const Button = styled.button `
  width: 100%;
  padding: 0.5em;
  border: none;
  background-color: #606C38;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 1em;
`;

const FormButton = ({tipo, texto}) => {
  return (
    <>
      <Button type={tipo}>{texto}</Button>
    </>
  )
}

export default FormButton;