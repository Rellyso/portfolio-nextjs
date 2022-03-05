import { ReactNode } from 'react';
import SectionTitle from '../SectionTitle';
import { ExperienceItem } from './ExperienceItem';

import { Container } from './styles';

interface ExperiencesProps {
  children: ReactNode;
}

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="02 anos" description="de experiência" />

      <section>
        <ExperienceItem
          year='2020'
          title='Desenvolvedor Front-end'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt amet maxime minima qui quos. A et nesciunt facere. Porro sint deleniti eligendi'
        />
        <ExperienceItem
          year='2021'
          title='Desenvolvedor Front-end'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt amet maxime minima qui quos. A et nesciunt facere. Porro sint deleniti eligendi'
        />
        <ExperienceItem
          year='2022'
          title='Desenvolvedor Front-end'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt amet maxime minima qui quos. A et nesciunt facere. Porro sint deleniti eligendi'
        />

      </section>
    </Container>
  );
};

