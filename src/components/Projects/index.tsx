import Link from 'next/link';
import { LinkButton } from '../LinkButton';
import SectionTitle from '../SectionTitle';
import { ProjectItem } from './ProjectItem';
import { Container } from './styles';


export function Projects() {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />

      <section>
        <ProjectItem
          title={"Projeto 01"}
          type="Website"
          slug="project01"
          img={"https://place-hold.it/800x500"}
        />

        <ProjectItem
          title={"Projeto 02"}
          type="Website"
          slug="project02"
          img={"https://place-hold.it/800x500"}
        />

        <ProjectItem
          title={"Projeto 03"}
          type="Website"
          slug="project03"
          img={"https://place-hold.it/800x500"}
        />

      </section>

      <LinkButton url="/projetos">Ver todos os projetos</LinkButton>
    </Container>
  );
};
