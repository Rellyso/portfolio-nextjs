import { Header } from "../../components/Header";
import { ProjectCard } from "../../components/ProjectItem";
import { ProjectsContainer } from "../../styles/ProjectsStyles";

export default function Projects() {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        <ProjectCard
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
        />
        <ProjectCard
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
        />
        <ProjectCard
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
        />
        <ProjectCard
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
        />
      </main>
    </ProjectsContainer>
  )
}