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
	border-radius: 0.5em;
`;

const FormLogin = () => {
	return (
		<>
			<Form>
				<FormInput tipo="email" id="id-login" label="Login" placeholder="seu@email.com" />
				<FormInput tipo="password" id="id-senha" label="Senha" placeholder="******" />

				<FormButton tipo="submit" texto="Entrar" />
				<Link to='/formulario-cadastro'>Cadastre-se</Link>
				<Link to='/formulario-recuperacao'>Esquecei minha senha</Link>
			</Form>
		</>
	);
}

export default FormLogin;