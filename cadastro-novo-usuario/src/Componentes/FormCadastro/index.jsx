const FormularioCadastro = () => {
    return (
      <form>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Sobrenome" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button>Cadastrar</button>
      </form>
    );
}

export default FormularioCadastro;