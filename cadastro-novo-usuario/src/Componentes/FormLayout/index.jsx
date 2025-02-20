import styled from "styled-components";

const FormLayout = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1em;
	background-color: #DDA15E;
	box-shadow: 0 0 0.1em #BC6C25;
	width: ${props => props.largura || '20%'};
`;


export default FormLayout;