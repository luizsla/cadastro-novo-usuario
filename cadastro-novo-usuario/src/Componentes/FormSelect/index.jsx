import styled from "styled-components";

const Grupo = styled.div `
	margin-bottom: 1em;
	width: 100%;
`;

const Select = styled.select `
  width: 100%;
  box-sizing: border-box;
  padding: 0.25em;
  border: none;
`;

const FormSelect = ({opcoes}) => {
  return (
    <>
      <Grupo>
        <Select>
          {opcoes.map((opcao, index) => (
            <option key={index} value={opcao.value}>{opcao.label}</option>
          ))}
        </Select>
      </Grupo>
    </>
  );
}

export default FormSelect;