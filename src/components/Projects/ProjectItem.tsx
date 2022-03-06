import { ProjectItemContainer } from "./styles";
import { AiOutlineRightCircle } from "react-icons/ai"
import Link from 'next/link'

type Props = {
  title: string,
  type: string,
  slug: string,
  img: string,
}

export function ProjectItem({ title, type, slug, img }: Props) {
  return (
    <ProjectItemContainer imgUrl={img}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>#{title}</h1>
          <h2>-{type}</h2>
        </div>

      </section>
      <button>
        <Link href={`/projetos/${slug}`}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjectItemContainer>
  )
}