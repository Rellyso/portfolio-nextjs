import { NavLinkContainer } from "./styles";
import Link from "next/link"
import { useRouter } from "next/router";

type Props = {
  title: string,
  path: string,
  includes?: boolean,
}

export function NavLink({ title, path, includes }: Props) {
  const router = useRouter();

  function verifyIsActive() {
    if (includes) {
      return router.pathname.includes(path)
    }

    return path === router.pathname;
  }

  const isActive = verifyIsActive();

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  )
}