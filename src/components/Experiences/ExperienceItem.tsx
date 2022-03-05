import { ItemContainer } from "./styles";

type Props = {
  year: string;
  title: string;
  description: string;
}

export function ExperienceItem({ year, title, description }: Props) {
  return (
    <ItemContainer>
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  )
}