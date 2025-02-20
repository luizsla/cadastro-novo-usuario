import FormButton from "../FormButton";
import FormInput from "../FormInput/Index";
import Link from "../Link";

const FormLogin = () => {
	return (
		<>
			<form>
				<FormInput tipo="email" id="id-login" label="Login" placeholder="seu@email.com" />
				<FormInput tipo="password" id="id-senha" label="Senha" placeholder="******" />

				<FormButton tipo="submit" texto="Entrar" />
				<Link />
			</form>
		</>
	);
}

export default FormLogin;