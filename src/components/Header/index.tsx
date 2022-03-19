import { ReactNode } from 'react';
import { NavLink } from './NavLink';

import { Container } from './styles';

interface HeaderProps {
  children: ReactNode;
}

export function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
      </ul>
    </Container>
  );
};
