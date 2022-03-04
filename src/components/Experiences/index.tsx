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
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
      </section>
    </Container>
  );
};

