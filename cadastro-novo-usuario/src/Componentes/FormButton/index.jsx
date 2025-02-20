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

const formButton = ({tipo, texto}) => {
  return (
    <>
      <Button type={tipo} className="form-button">{texto}</Button>
    </>
  )
}

export default formButton;