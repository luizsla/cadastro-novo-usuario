import styled from "styled-components";

import BackgroundFormulario from "../BackgroundFormulario";
import Cabecalho from "../Cabecalho";
import CustomLink from "../CustomLink";
import FormLayout from "../FormLayout";
import FormInput from "../FormInput";
import FormButton from "../FormButton";



const NotaRodape = styled.small `
  font-size: 0.em;
`;

const formRecuperacaoSenha = () => {
  return (
    <>
      <BackgroundFormulario>
        <FormLayout>
          <Cabecalho>Esqueceu sua senha? Preencha seu e-mail abaixo...</Cabecalho>

          <FormInput tipo="email" id="id-email" label="E-mail" placeholder="seuMelhor@email.com" />

          <CustomLink to='/' cor="#FEFAE0">Voltar</CustomLink>
          <FormButton tipo="submit" texto="Recuperar" />

          <NotaRodape>Caso seu e-mail exista em nossa base de dados você receberá um e-mail com mais instruções de como recuperar sua senha.</NotaRodape>
    
        </FormLayout>
      </BackgroundFormulario>
    </>
  );
}

export default formRecuperacaoSenha;