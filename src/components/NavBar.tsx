import styled from "styled-components";
import { NavBar as NavBarType } from "@/common/types";
import Link from "next/link";

type Props = {
  navBar: NavBarType;
};

const NavBar = ({ navBar }: Props) => {
  return (
    <StyledNav>
      {navBar.links.map((link, index) => (
        <Link key={"navItem-" + index} href={link.url}>
          <StyledNavItem>{link.text}</StyledNavItem>
        </Link>
      ))}
    </StyledNav>
  );
};

export default NavBar;

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

const StyledNavItem = styled.h4`
  color: var(--highlight-blue);
`;
