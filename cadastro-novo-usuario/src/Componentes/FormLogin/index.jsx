import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FormButton from "../FormButton";
import FormInput from "../FormInput";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1em;
	background-color: #DDA15E;
	box-shadow: 0 0 0.1em #BC6C25;
	width: 18%;
`;

const EstiloLink = styled(Link) `
	color: #606C38;
	text-decoration: none;
	display: inline-block;
	width: 100%;
	margin-bottom: 0.3em;
	text-align: left;

	&&:hover {
		text-decoration: underline;
		color: #283618;
	}
`;

const FormLogin = () => {
	return (
		<>
			<Form>
				<FormInput tipo="email" id="id-login" label="Login" placeholder="seu@email.com" />
				<FormInput tipo="password" id="id-senha" label="Senha" placeholder="******" />

				<FormButton tipo="submit" texto="Entrar" />
				<EstiloLink to='/formulario-cadastro'>Cadastre-se</EstiloLink>
				<EstiloLink to='/formulario-recuperacao'>Esquecei minha senha</EstiloLink>
			</Form>
		</>
	);
}

export default FormLogin;