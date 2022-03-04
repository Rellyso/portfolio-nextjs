import { CodeItem } from "./styles";

type Props = {
  comment?: string;
  title: string;
  items: {
    title: string,
    content: string
  }[];
}

export function CodeInfoItem({ comment, title, items }: Props) {
  return (
    <CodeItem>
      {comment && <span className="comment">// Minha apresentação</span>}
      <span className="purple">{title}:</span> {`{`}
      {items && items.map(item => (
        <div key={item.title}>
          {item.title}: <span className="blue">{item.content}</span>,
        </div>
      ))}
      {`}`}
    </CodeItem>
  )
}