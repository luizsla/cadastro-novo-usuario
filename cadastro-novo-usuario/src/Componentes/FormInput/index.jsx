import styled from "styled-components";

const Grupo = styled.div `
	margin-bottom: 1em;
	width: 100%;
`;

const Label = styled.label `
	color: #FEFAE0;
	font-weight: bolder;
	margin-bottom: 0.5em;
	display: block;
`;

const Input = styled.input `
	width: 100%;
	box-sizing: border-box;
	padding: 0.15em;
	border-color: #FEFAE0;
	border-radius: 0.15em;
`;

const FormInput = ({id, tipo, label, placeholder}) => {
    return (
			<>
				<Grupo>
					<Label htmlFor={id}>{label}:</Label>
					<Input type={tipo} id={id} placeholder={placeholder} />
				</Grupo>
			</>
    );
}

export default FormInput;