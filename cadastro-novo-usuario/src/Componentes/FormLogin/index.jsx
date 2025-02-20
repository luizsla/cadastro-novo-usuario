import FormInput from "../FormInput/Index";

const FormLogin = () => {
	return (
		<>
			<form>
				<FormInput tipo="email" id="id-login" label="Login" placeholder="seu@email.com" />
				<FormInput tipo="password" id="id-senha" label="Senha" placeholder="******" />
			</form>
		</>
	);
}

export default FormLogin;