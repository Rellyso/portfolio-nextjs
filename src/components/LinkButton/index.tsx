import Link from 'next/link';
import { ReactNode } from 'react';
import { Container } from './styles';

interface LinkButtonProps {
  url: string;
  children: ReactNode;
}

export function LinkButton({ url, children }: LinkButtonProps) {
  return (
    <Container type="button">
      <Link href={url}>
        <a>
          {children}
        </a>
      </Link>
    </Container>
  );
};

