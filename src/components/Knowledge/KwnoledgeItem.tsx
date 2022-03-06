import { ReactNode } from "react";
import { KnowledgeItemContainer } from "./styles";

type Props = {
  title: string,
  icon: ReactNode,
}

export function KnowledgeItem({ title, icon }: Props) {
  return (
    <KnowledgeItemContainer>
      <p>{title}</p>
      {icon}
    </KnowledgeItemContainer>
  )
}