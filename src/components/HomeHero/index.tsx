import { ReactNode } from 'react';

import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/rellyson-3x4.png';
import { CodeInfoItem } from './CodeInfoItem';

interface HomeHeroProps {
  children: ReactNode;
}

export function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Rellyson" />

      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Rellyson</h2>
        </TextContainer>

        <InfosContainer>
          <CodeInfoItem
            comment="//Minha apresentação"
            title="Infos"
            items={[
              { title: "Nome", content: "Rellyson" },
              { title: "Sobrenome", content: "Douglas" },
            ]}
          />
          <CodeInfoItem
            title="Cargo"
            items={[
              { title: "Função", content: "Dev Front-end" },
              { title: "Empresa", content: "traDUS" },
            ]}
          />
        </InfosContainer>
      </div>
    </Container>
  );
};

