import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FormLayout from '../FormLayout';
import FormButton from "../FormButton";
import FormInput from "../FormInput";

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
			<FormLayout>
				<FormInput tipo="email" id="id-login" label="Login" placeholder="seu@email.com" />
				<FormInput tipo="password" id="id-senha" label="Senha" placeholder="******" />

				<FormButton tipo="submit" texto="Entrar" />
				<EstiloLink to='/formulario-cadastro'>Cadastre-se</EstiloLink>
				<EstiloLink to='/formulario-recuperacao'>Esquecei minha senha</EstiloLink>
			</FormLayout>
		</>
	);
}

export default FormLogin;