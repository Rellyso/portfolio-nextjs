import { ReactNode } from 'react';
import SectionTitle from '../SectionTitle';
import { Form } from './Form';

import { Container } from './styles';

interface ContactFormProps {
  children: ReactNode;
}

export function ContactForm() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa dos
            <br />
            meus serviços?
          </>
        }

        description={
          <>
            Preencha o formulário abaixo que
            <br />
            irei retornar em breve
          </>
        }
      />

      <Form />
    </Container>
  );
};