import FormLayout from '../FormLayout';
import FormButton from "../FormButton";
import FormInput from "../FormInput";
import CustomLink from '../CustomLink';


const FormLogin = () => {
	return (
		<>
			<FormLayout>
				<FormInput tipo="email" id="id-login" label="Login" placeholder="seu@email.com" />
				<FormInput tipo="password" id="id-senha" label="Senha" placeholder="******" />

				<FormButton tipo="submit" texto="Entrar" />
				<CustomLink to='/formulario-cadastro'>Cadastre-se</CustomLink>
				<CustomLink to='/formulario-recuperacao'>Esquecei minha senha</CustomLink>
			</FormLayout>
		</>
	);
}

export default FormLogin;