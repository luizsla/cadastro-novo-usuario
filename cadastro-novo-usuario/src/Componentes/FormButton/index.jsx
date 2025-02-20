import styled from "styled-components";

const Button = styled.button `
  width: 100%;
  padding: 0.5em;
  margin-top: 1em;
  border: none;
  background-color: #606C38;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const formButton = ({tipo, texto}) => {
  return (
    <>
      <Button type={tipo} className="form-button">{texto}</Button>
    </>
  )
}

export default formButton;