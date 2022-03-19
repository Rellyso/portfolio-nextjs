import { BannerProject } from "../../../components/BannerProject";
import { Header } from "../../../components/Header";
import { LinkButton } from "../../../components/LinkButton";
import { ProjectContainer } from "../../../styles/ProjectStyles";

export default function Project() {
  return (
    <ProjectContainer>
      <Header />
      <BannerProject
        title="Projeto 01"
        type="Website"
        imgUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
      />

      <main>
        <p>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempora illo ipsum
          exercitationem excepturi nemo, fugiat
          sequi recusandae minus id? Quam
          officiis unde aperiam sapiente libero
          architecto tempora quo ad! Minima!</p>

        <LinkButton url="#">
          Ver projeto online
        </LinkButton>
      </main>
    </ProjectContainer>
  )
}