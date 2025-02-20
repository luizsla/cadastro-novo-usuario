import { Link } from 'react-router-dom';
import FormButton from "../FormButton";
import FormInput from "../FormInput";

const FormLogin = () => {
	return (
		<>
			<form>
				<FormInput tipo="email" id="id-login" label="Login" placeholder="seu@email.com" />
				<FormInput tipo="password" id="id-senha" label="Senha" placeholder="******" />

				<FormButton tipo="submit" texto="Entrar" />
				<Link to='/formulario-cadastro'>Cadastre-se</Link>
				<Link to='/formulario-recuperacao'>Esquecei minha senha</Link>
			</form>
		</>
	);
}

export default FormLogin;