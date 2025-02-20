import styled from "styled-components";

import BackgroundFormulario from "../BackgroundFormulario";
import FormLayout from "../FormLayout";
import FormInput from "../FormInput";
import FormButton from "../FormButton";
import CustomLink from "../CustomLink";

const Fieldset = styled.fieldset `
  border: none;
  padding: 0.5em;
  margin-bottom: 1em;
  width: 98%;
`;


const FormularioCadastro = () => {
    return (
      <BackgroundFormulario>
        <FormLayout largura="40%">
          <Fieldset>
            <legend>Dados gerais:</legend>

            <FormInput tipo="text" id="id-nome" label="Nome" placeholder="Pedro" />
            <FormInput tipo="text" id="id-sobrenome" label="Sobrenome" placeholder="Pereira" />
            <FormInput tipo="email" id="id-email" label="E-mail" placeholder="seu@email.com" />
            <FormInput tipo="datetime-local" id="id-data-nascimento" label="Data de nascimento" />
          </Fieldset>
          
          <Fieldset>
            <legend>Segurança:</legend>

            <FormInput tipo="password" id="id-senha" label="Senha" placeholder="******" />
            <FormInput tipo="password" id="id-senha-2" label="Repetição da senha" placeholder="******" />
          </Fieldset>
          
          <CustomLink to='/' cor="#FEFAE0">Voltar</CustomLink>
          <FormButton tipo="submit" texto="Cadastrar" />
        </FormLayout>
      </BackgroundFormulario>
    );
}

export default FormularioCadastro;